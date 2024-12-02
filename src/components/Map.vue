<template>
  <v-container fluid>
    <v-row>
      <!-- Marker List -->
      <v-col
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
          order="2"
          order-md="1"
      >
        <v-list>
          <v-list-item
              v-for="(marker, index) in markers"
              :key="index"
              @mouseenter="hoveredMarker = marker.id"
              @mouseleave="hoveredMarker = null"
              @click="onListItemClick(marker)"
          >
            <v-list-item-content>
              <v-list-item-title>
                <v-icon v-if="isSelected(marker.id)">mdi-arrow-right</v-icon>
                {{ $t("map.marker") }} {{ index + 1 }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ marker.latlng.lat.toFixed(4) }}, {{ marker.latlng.lng.toFixed(4) }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ marker.address }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn
                  icon
                  color="red"
                  v-show="hoveredMarker === marker.id"
                  @click.stop="deleteMarker(marker.id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
      <!-- Map -->
      <v-col
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 8"
          order="1"
          order-md="2"
      >
        <div class="map-wrapper">
          <l-map
              :zoom="zoom"
              :center="center"
              style="height: 500px;"
              @click="onMapClick"
          >
            <l-tile-layer :url="tileUrl"></l-tile-layer>
            <l-marker
                v-for="marker in markers"
                :key="marker.id"
                :lat-lng="marker.latlng"
                @click="onMarkerClick(marker)"
            ></l-marker>
          </l-map>
          <v-btn
              class="map-add"
              fab
              dark
              color="indigo"
              @click="enableAdding"
              :disabled="isAdding"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </div>
        <v-btn color="blue" class="mt-5 ml-5" @click="getCurrentLocation">
          {{ $t("map.location") }}
        </v-btn>
        <v-btn
            color="red"
            class="mt-5 ml-5"
            :disabled="!isMarkers"
            @click="deleteAllMarkers"
        >
          {{ $t("map.delete") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import {LMap, LMarker, LTileLayer} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import {mapActions, mapState} from 'vuex';
import {geocode, getLocationByIP} from "@/services/Geo";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 13,
      center: [44.816240, 20.460440],
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      isAdding: false,
      isAddngToastId: null,
      mapElement: null,
      hoveredMarker: null,
    };
  },
  computed: {
    ...mapState(['markers']),
    isMarkers: function () { return this.markers.length > 0; },
  },
  mounted() {
    this.$nextTick(() => {
      this.mapElement = this.$el.querySelector('.leaflet-container');
    });
  },
  methods: {
    ...mapActions(['loadMarkers', 'addMarker']),
    isSelected(id)
    {
      return this.markers.find(item => item.id === id)?.isSelected;
    },
    enableAdding() {
      this.isAdding = !this.isAdding;
      this.mapElement?.classList.add('map-pointer');
      this.isAddngToastId = this.$toast.success(this.$t('map.addMode'), { timeout: false });
    },
    async deleteMarker(markerId) {
      try {
        await this.$store.dispatch('deleteMarker', markerId);
      } catch (error) {
        console.error(this.$t('map.deleteError'), error);
      }
    },
    async deleteAllMarkers() {
      try {
        await this.$store.dispatch('deleteAllMarkers');
      } catch (error) {
        console.error(this.$t('map.deleteAllError'), error);
      }
    },
    async onMapClick(e) {
      if (this.isAdding) {
        this.$toast.dismiss(this.isAddngToastId);
        const toastId = this.$toast.success(this.$t('map.adding'));
        const latlng = e.latlng;
        try {
          const address = await geocode(latlng);
          const marker = { latlng, address };
          await this.addMarker(marker);
          this.isAdding = false;
          this.$toast.dismiss(toastId);
          this.mapElement?.classList.remove('map-pointer');
        } catch {
          this.$toast.error(this.$t('map.addressNotFound'), { timeout: 2000 });
        }
      }
    },
    onMarkerClick(marker) {
      if (marker.isSelected) return;
      this.$store.commit('setSelectedMarkerId', marker.id);
      this.$router.push(`/map/${marker.id}`);
    },
    onListItemClick(marker) {
      if (marker.isSelected) return;
      this.center = marker.latlng;
      this.$store.commit('setSelectedMarkerId', marker.id);
      this.$router.push(`/map/${marker.id}`);
    },
    getCurrentLocation() {
      const toastId = this.$toast.success(this.$t('map.detectingLocation'));
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const latlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              this.center = [latlng.lat, latlng.lng];
              this.$toast.dismiss(toastId);
              const marker = {
                latlng,
                address: this.$t('map.location'),
                id: Date.now()
              };
              this.$store.dispatch('addMarker', marker);
              this.$store.commit('setSelectedMarkerId', marker.id);
            },
            (error) => {
              this.$toast.error(this.$t('map.geoPositionError'), { timeout: 2000 });
              console.error(error);
            }
        );
      } else {
        this.$toast.error(this.$t('map.BrowserError'), { timeout: 2000 });
      }
    },
  },
  async created() {
    await this.loadMarkers();
    const positionByIP = await getLocationByIP();
    if (!positionByIP) {
      this.$toast.warning(this.$t('map.geoIPError'), { timeout: 2000 })
    }
    this.center = positionByIP || [44.816240, 20.460440];
    if (this.$route.params.id) {
      this.$store.commit('setSelectedMarkerId', Number(this.$route.params.id));
    }
  },
  watch: {
    '$route.params.id'(newId) {
      if (newId) {
        const marker = this.markers.find(
            (m) => m.id === Number(newId)
        );
        if (marker) {
          this.center = marker.latlng;
          this.$store.commit('setSelectedMarkerId', marker.id);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.map {
  &-wrapper {
    position: relative;
  }
  &-add {
    position: absolute !important;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
}
</style>
