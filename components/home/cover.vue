<template>
<div class="cover">
    <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in slides"
      :key="i"
      :src="item.img"
    >

        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <div class="text-h2 text-center">
            {{ item.heading }}
          </div>
          <div class="text-h6 text-center">
            {{ item.text }}
          </div>
          </v-col>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
export default {
  name: 'CoverSection',
   data () {
      return {


        slides: [
          { heading:'We are Saffy',text:'The world first biological solution for water purification',img:'/img/slides/bg-1.svg'},
          { heading:'We are Saffy',text:'The world first biological solution for water purification',img:'/img/slides/bgHero.jpg'}
        ],
      }
    },
}
</script>
<style>
.cover {
  width: 100%;
}
</style>
