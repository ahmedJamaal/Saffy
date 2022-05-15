<template>
<div class="partner px-16 py-10">
    <v-row>
    <v-col cols="12" class="text-center">
      <h1>Our Partner</h1>
    </v-col>
  </v-row>
    <v-row justify="center" align="center">
    <v-col cols="2">
      <v-img  :src="`${$config.BASE_URL}/img/other/le village.jpg`"></v-img>
    </v-col>
    <v-col cols="2">
      <v-img :src="`${$config.BASE_URL}/img/other/Conscious venture lab.png`"></v-img>
    </v-col>
    <v-col cols="2">
      <v-img  :src="`${$config.BASE_URL}/img/other/Design terminal.png`"></v-img>
    </v-col>
    <v-col cols="2">
      <v-img :src="`${$config.BASE_URL}/img/other/the camp.jpg`"></v-img>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'partner'
}
</script>
