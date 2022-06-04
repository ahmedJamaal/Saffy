<template>
  <v-app >
    <Navigation />
    <v-main class="pt-100">

        <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navigation from "~/components/layout/Navigation.vue";
import Footer from "~/components/layout/Footer.vue";
export default {
  name: "default",
  layout: "default",
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    fab: null,
  }),
};
</script>

<style scoped>
/*
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}*/

</style>
