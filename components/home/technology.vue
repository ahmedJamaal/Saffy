<template>
<v-container>
    <v-row class="text-center">
    <v-col cols="12">
      <h1>The Saffy technology</h1>
    </v-col>
    <v-col cols="12">
      <h3>
        To purify water, Saffy conceived a bio membrane consisting of 3 major
        layers. Each layer takes care of a certain type of pollutant
      </h3>
      <br />
      <h3>
        The system prevents contaminations both inside and outside the system,
        without altering the natural properties of drinking water
      </h3>
      <br />
      <h3>
        Saffy bio membrane is self-sufficient and can be scaled from a personal
        water bottle up to large industrial or community-owned units
      </h3>
    </v-col>

  </v-row>
  <v-row justify="center" align="center">
     <v-col cols="4">
      <v-img width="50%" :src="`${$config.BASE_URL}/img/BOTTLE.png`"></v-img>
    </v-col>
    <v-col cols="3">
      <div class="arrow-1"></div>
    </v-col>
    <v-col cols="4">
      <v-img width="100%" :src="`${$config.BASE_URL}/img/FACTORY.png`"></v-img>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
export default {
  name: "TechnolgoySection",
};
</script>
<style>
.arrow-1 {
  width:250px;
  height:30px;
  display: flex;
}
.arrow-1:before {
  content: "";
  background: currentColor;
  width:15px;
  clip-path: polygon(0 10px,calc(100% - 15px) 10px,calc(100% - 15px) 0,100% 50%,calc(100% - 15px) 100%,calc(100% - 15px) calc(100% - 10px),0 calc(100% - 10px));
  animation: a1 1.5s infinite linear;
}
@keyframes a1 {
  90%,100%{flex-grow: 1}
}

</style>
