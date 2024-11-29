<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
