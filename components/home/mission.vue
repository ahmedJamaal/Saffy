<template>
  <div class="mission p-12">
          <div class="number-heading">2</div>
      <v-row justify="center" align="center">
    <div class="mission-card">
      <v-col cols="8">
        <div class="heading text-center">
        <h1>The Mission</h1>
        </div>
        <div class="sub-heading">

          <div class="overlay">
            <h3 class="py-15">
              Water is the most precious resources although 1.8 Billion people
              are subjected to contaminated drinking water
            </h3>
            <h3 class="py-15">
              80% of waste water flows back to the ecosystem
            </h3>
          </div>
        </div>
      </v-col>
    </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "mission",
};
</script>

<style scoped>

.overlay {
  background-image: url(/rotate-bg-main.svg);
  /* background-repeat: no-repeat; */
  background-position: center;
  text-transform: uppercase;

   background-size: 100% 70%;
  background-color: #efefef;

}

.mission-card {


  border: 2px solid #000;
  width: 100;
  }
.mission { position: relative;


}
.number-heading {
  position: absolute;
  font-size: 250px;
  line-height: 250px;
  top: 0;
  left: 0;
  color: #000;
  z-index: 11111111;
}

</style>
