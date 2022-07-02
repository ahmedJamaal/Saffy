<template>
  <div class="award_partner py-100" >
    <v-row justify="center" align="center" class="py-0">
      <v-col cols="1">
        <div class="number-heading">4</div>
      </v-col>
      <v-col cols="2">
        <h3>Awards & partners</h3>
      </v-col>
    </v-row>
    <v-row justify="center" align="start" class="mt_10">
      <v-col cols="5">
        <div class="award_partner-contenet">
             <p class="ml-16 px-6">They approve our technology and collaborate with us</p>
        <v-img
          class="award_partner-img"
          src="/img/award_partener.png"
          max-height="200"
          max-width="200"
        ></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TechnolgoySection",
};
</script>
<style scoped>
.mt_10 {
  margin-top: -20px;
}
.number-heading {
  text-align: right;
}
.award_partner .award_partner-contenet{
display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

}
.award_partner .award_partner-contenet .award_partner-img {

    margin: -50px 50px 0 0;
}

</style>
