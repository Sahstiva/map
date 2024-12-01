<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{ $t("header.title") }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/about">{{ $t("header.about") }}</v-btn>
    <v-btn text to="/map">{{ $t("header.map") }}</v-btn>
    <v-menu offset-y class="header-languages">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-earth</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="setLanguage('en')">
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setLanguage('ru')">
          <v-list-item-title>Русский</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &-languages {
    z-index: 1000 !important;
  }
}
</style>
