<template>
  <v-app-bar app color="primary" dark>
    <!-- Toolbar Title -->
    <v-toolbar-title class="header-title">{{ $t("header.title") }}</v-toolbar-title>

    <!-- Spacer -->
    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn text to="/about">{{ $t("header.about") }}</v-btn>
      <v-btn text to="/map">{{ $t("header.map") }}</v-btn>
    </template>

    <!-- Mobile Navigation -->
    <template v-else>
      <v-menu offset-y class="header-menu">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/about">
            <v-list-item-title>{{ $t("header.about") }}</v-list-item-title>
          </v-list-item>
          <v-list-item to="/map">
            <v-list-item-title>{{ $t("header.map") }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <!-- Language Selector -->
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
  &-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 600px) {
      white-space: normal; /* Allow wrapping on small screens */
      text-align: left;
      font-size: 1.05rem;
      line-height: 1.4;
    }
  }
  &-languages {
    z-index: 1000 !important;
  }
  &-menu {
    z-index: 1000 !important;
  }
}
</style>
