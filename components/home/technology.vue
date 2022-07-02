<template>
  <section class="technology py-100">
    <v-row justify="center" align="end" class="py-0">
        <v-col cols="2">
        <div class="number-heading">3</div>
      </v-col>
      <v-col cols="3">
        <h3>The Saffy technology</h3>
        <p class="mt-5">
          To purify water, Saffy conceived a bio membrane consisting of 3 major layers.
          Each layer takes care of a certain type of pollutant
        </p>
      </v-col>

    </v-row>
    <v-row justify="center" align="center" class="py-0">
      <v-col cols="3">
        <p>
          The system prevents contaminations both inside and outside the system, without
          altering the natural properties of drinking water
        </p>
      </v-col>
      <v-col cols="2" >
        <v-img class="mr-auto" src="/img/technology-right.svg" max-height="150" max-width="150"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="py-0">
      <v-col cols="2">
        <v-img src="/img/technology-left.svg" max-height="150" max-width="150" class="ml-auto" ></v-img>
      </v-col>
      <v-col cols="3">
        <p>
          Saffy bio membrane is self-sufficient and can be scaled from a personal water
          bottle up to large industrial or community-owned units
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="py-0">
      <v-img width="100%" height="200px" src="/img/saffy_products.svg"></v-img>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "TechnolgoySection",
};
</script>
<style scoped>
.number-heading {
 text-align: right;

}
</style>
