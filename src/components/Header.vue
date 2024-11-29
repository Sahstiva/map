<script>
export default {
  name: "Header"
}
</script>

<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Мое приложение</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/about">О задании</v-btn>
    <v-btn text to="/map">Карта</v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>
