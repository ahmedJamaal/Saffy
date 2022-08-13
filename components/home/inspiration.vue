<template>
  <section class="inspiration p-12 py-xs-10 py-sm-12 py-md-14 py-lg-15 py-xl-16">
    <v-row justify="center" align="end" class="py-0">
      <v-col cols="3">
        <h3 class="section-header">SaffyWater inspiration</h3>
      </v-col>
    </v-row>
    <div class="number-heading">2</div>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <div class="sub-heading">
          <p>
             We looked at Nature and created Saffy a solution for water purification which is :
          </p>
          <p>Sustainable & biodegradable</p>
          <p>Gets rid of pathogens, heavy metals & other pollutants</p>
          <p>Eliminates both liquid industrial & agricultural waste</p>
          <p>Scalable from a personal use model to a community model</p>
          <p>Aesthetic</p>

    <div class="overlays"></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "InspirationSection",
};
</script>


<style scoped>
.inspiration {
  position: relative;
  width: 100%;
  height: 100%;
}
.overlays {
  background-image: url("/img/insipre_svg.svg");
  background-repeat: no-repeat;
  background-position: center center;
  /* background-color: #ccc; */
  width: 100%;
 height: 400px;
  z-index: -1;
  position: absolute;
      opacity: 0.6;
 top: 1%;
      right: 2%;
   transform: rotate(-3deg);

}

.sub-heading {
  height: 100%;
  position: relative;
  z-index: 1;
      padding-top: 15px;

}
.number-heading {
  position: absolute;
  z-index: 0;
top: 10%;
    left: 54%;
}

.sub-heading p {
  margin: 0;
  text-align: center;
      padding: 15px 210px;
}
</style>
