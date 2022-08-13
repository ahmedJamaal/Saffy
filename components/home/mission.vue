<template>
  <section class="mission py-md-16">
    <v-row justify="center" align="end" class="py-0">

        <h3 class="section-header">Mission</h3>

    </v-row>
          <div class="number-heading">1</div>
    <v-row justify="center" align="center">
      <v-col cols="4">
          <div class="sub-heading">
            <p>
            SaffyWater mission is to give access to clean drinkable water at the smartest
            and most  sustainable way.
          </p>
          <p>
           To contribute to a healthier environment by building sustainable eco-friendly products.
          </p>

        <div class="overlays"> </div>
        </div>
      </v-col>
    </v-row>
  </section>
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
.mission h3 {
      margin-left: 17%;
}
.overlays {
  background-image: url("/img/mission.svg");
  background-repeat: no-repeat;
  background-position: center center;
   /* background-color: #ccc; */
  width: 100%;
  height: 300px;
  z-index: -1;
  /* border-bottom: medium solid black;
  background-image: url("/img/mission.png");
  background-repeat: no-repeat; */
   position: absolute;
  top: 0;
      right: 7%;
}

.sub-heading {
  height: 100%;
  position: relative;
  z-index: 1;
  padding-top: 35px;
}
.number-heading {
   position: absolute;
   z-index: 0;

        top: 6%;
        left: 37%;
}

.sub-heading p{
  text-align: center;
   padding: 17px 35px;
   line-height: 25px;   /* within paragraph */
  /* between paragraphs */
}
</style>
