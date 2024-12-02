<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title>
        <h1 class="about-title">{{ $t("about.title") }}</h1>
      </v-card-title>
      <v-card-text>
        <div>
          <p>{{ $t("about.intro") }}</p>
          <h2 class="about-section-title">{{ $t("about.sectionTitleAbout") }}</h2>
          <p>{{ $t("about.sectionContentAbout") }}</p>
          <h2 class="about-section-title">{{ $t("about.sectionTitleMap") }}</h2>
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
          <h2 class="about-section-title">{{ $t("about.exampleTitle") }}</h2>
          <v-img
              class="mt-2 about-image"
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

.about-title {
  font-size: 2rem;
}

.about-section-title {
  font-size: 1.5rem;
}

.about-image {
  height: 479px;
  width: 564px;
}


@media (max-width: 600px) {
  .about-title {
    font-size: 1.5rem;
  }

  .about-section-title {
    font-size: 1.25rem;
  }

  .about-image {
    height: 240px;
    width: auto;
  }
}
</style>
