<template>
  <div class="story py-100" >
    <v-row justify="center" align="center"  no-gutters>
      <v-col cols="2">
        <v-img
          class="story-img"
          src="/img/story-top.svg"
          max-height="150"
          max-width="150"
        ></v-img>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" align="center" >
      <v-col cols="1">
        <div class="number-heading">4</div>
      </v-col>
      <v-col cols="1">
       <v-img
          class="story-img"
          src="/img/story-mid.png"
          max-height="100"
          max-width="100"
        ></v-img>
      </v-col>
    </v-row>
    <v-row  no-gutters justify="center" align="center">
      <v-col cols="1">
        <v-img
          class="story-img"
          src="/img/story-head.png"
          max-height="100"
          max-width="100"
        ></v-img>
      </v-col>
      <v-col cols="3">
        <h3>Our Story</h3>
      </v-col>
    </v-row>
    <v-row  justify="center" align="center">
      <v-col cols="4">
             <p class="ml-2 px-6">
              Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
             </p>

      </v-col>
       </v-row>
       <v-row  no-gutters justify="center" align="center">

      <v-col cols="1">
               <v-img
          class="story-img"
          src="/img/story-bottom.png"
          max-height="100"
          max-width="100"
        ></v-img>

      </v-col>
       </v-row>


  </div>
</template>
<script>
export default {
  name: "StorySection",
};
</script>
<style scoped>

</style>
