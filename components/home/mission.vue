<template>
  <div class="mission">
    <v-row>
    <v-col class="text-center">
      <h1>The Mission</h1>
    </v-col>
  </v-row>
  <div class="mission-cover">
      <v-row >
    <v-col cols="12" class="text-center">
      <h3>Water is the most precious ressources although
1.8 Billion people are subjected to contaminated
drinking water</h3>
    </v-col>
    <v-col cols="12" class="text-center">
      <h3>80% of waste water flows back to the ecosystem</h3>
    </v-col>
  </v-row>
  </div>

  </div>
</template>

<script>
export default {
  name: 'mission'
}
</script>
<style>
.mission-cover {

  background-image: url("~@/assets/images/slides/bg-1.svg");
   background-attachment: fixed;
  background-position: center;
  background-size: 100%;

}
</style>
