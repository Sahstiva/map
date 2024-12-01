<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title>
        <h1>{{ $t("about.title") }}</h1>
      </v-card-title>
      <v-card-text>
        <div>
          <p>{{ $t("about.intro") }}</p>
          <h2>{{ $t("about.sectionTitleAbout") }}</h2>
          <p>{{ $t("about.sectionContentAbout") }}</p>
          <h2>{{ $t("about.sectionTitleMap") }}</h2>
          <p>{{ $t("about.sectionContentMap") }}</p>
          <ol>
            <li>
              {{ $t("about.list.item1") }}
              <ul>
                <li>
                  {{ $t("about.list.item1Details.a") }}
                  <a href="https://geocode.maps.co/">https://geocode.maps.co/</a>.
                </li>
                <li>{{ $t("about.list.item1Details.b") }}</li>
              </ul>
            </li>
            <li>{{ $t("about.list.item2") }}</li>
            <li>{{ $t("about.list.item3") }}</li>
            <li>{{ $t("about.list.item4") }}</li>
            <li>{{ $t("about.list.item5") }}</li>
          </ol>
          <p>{{ $t("about.storageNote") }}</p>
          <h2>{{ $t("about.exampleTitle") }}</h2>
          <v-img
              class="mt-2"
              height="479px"
              width="564px"
              src="../assets/images/example.png"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
p {
  text-align: justify;
  margin-bottom: 1em;
}
</style>
