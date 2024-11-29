<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
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
              @click.native="onMarkerClick(marker)"
          ></l-marker>
        </l-map>
        <v-btn @click="enableAdding">Добавить маркер</v-btn>
      </v-col>
      <v-col cols="4">
        <v-list>
          <v-list-item
              v-for="marker in markers"
              :key="marker.id"
              :color="isSelected(marker) ? 'primary' : ''"
              @click="onListItemClick(marker)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ marker.address }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 13,
      center: [55.751244, 37.618423], // Координаты Москвы
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      isAdding: false,
    };
  },
  computed: {
    ...mapState(['markers', 'selectedMarkerId']),
  },
  methods: {
    ...mapActions(['loadMarkers', 'addMarker']),
    enableAdding() {
      this.isAdding = true;
    },
    async onMapClick(e) {
      if (this.isAdding) {
        const latlng = e.latlng;
        try {
          const address = await this.geocode(latlng);
          const marker = { latlng, address };
          await this.addMarker(marker);
          this.isAdding = false;
        } catch {
          alert('Адрес не найден');
        }
      }
    },
    async geocode(latlng) {
      const response = await fetch(
          `https://geocode.maps.co/reverse?lat=${latlng.lat}&lon=${latlng.lng}`
      );
      const data = await response.json();
      if (data && data.display_name) {
        return data.display_name;
      } else {
        throw new Error('Address not found');
      }
    },
    onMarkerClick(marker) {
      this.$store.commit('setSelectedMarkerId', marker.id);
      this.$router.push(`/map/${marker.id}`);
    },
    onListItemClick(marker) {
      this.center = marker.latlng;
      this.$store.commit('setSelectedMarkerId', marker.id);
      this.$router.push(`/map/${marker.id}`);
    },
    isSelected(marker) {
      return marker.id === this.selectedMarkerId;
    },
  },
  async created() {
    await this.loadMarkers();
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

<style>
/* Добавьте необходимые стили */
</style>
