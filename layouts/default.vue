<template>
   <v-app>
    <Navigation />
    <v-container fluid fill-height
    grid-list-xl
    grid-list-lg
    grid-list-md
    grid-list-xs
    grid-list-sm>
      <v-layout justify-center>
        <v-flex xs12 sm12 md12 lg12 xl12 >
        <nuxt />
    </v-flex>
    </v-layout>
    </v-container>


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
    app:true,
  }),
};
</script>
<style>
 @import "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css";
.v-application--wrap{
  background: yellow !important;
  /* min-height:calc(100vh - 64px) !important; */
}
</style>
