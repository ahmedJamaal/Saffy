<template>
  <div class="mission p-12 pb-100">
    <v-row justify="center" align="end" class="py-0">
      <v-col cols="2">
        <h3>The Mission</h3>
      </v-col>
    </v-row>
          <div class="number-heading">1</div>
    <v-row justify="center" align="center">
      <v-col cols="6">
          <div class="sub-heading">
            <p>
            Water is the most precious resources although 1.8 Billion people are
            subjected to contaminated drinking water.
          </p>
          <p>
            80% of waste water flows back to the ecosystem.
          </p>

        <div class="overlays"> </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "mission",
};
</script>

<style scoped>
.mission {
   position: relative;
  width: 100%;
  height: 100%;
}
.overlays {
  background-image: url("/Saffy/img/mission.png");
  background-repeat: no-repeat;
  background-position: center center;
   /* background-color: #ccc; */
  width: 100%;
  height: 415px;
  z-index: -1;
  /* border-bottom: medium solid black;
  background-image: url("/img/mission.png");
  background-repeat: no-repeat; */
   position: absolute;
  top: 0;
      right: 4%;
}

.sub-heading {
  height: 100%;
  position: relative;
  z-index: 1;
  padding-top: 50px;
}
.number-heading {
   position: absolute;
   z-index: 0;

    top: 0;
  left: 35%;
}

.sub-heading p{
  text-align: center;
  padding: 50px 80px;
   line-height: 32px;   /* within paragraph */
  /* between paragraphs */
}
</style>
