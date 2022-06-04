<template>
 <div>
    <Cover/>
    <Mission/>
    <Awards class="py-100"/>
    <!--
    <Technology/>
    <Partners/>
        <Inspiration/>
     -->

 </div>
</template>

<script>
import Cover from '~/components/home/cover.vue'
import Mission from '~/components/home/mission.vue'
import Awards from '~/components/home/awards.vue'
/*import Inspiration from '~/components/home/inspiration.vue'
import Partners from '~/components/home/partners.vue'
import Technology from '~/components/home/technology.vue'*/
export default {
  name: 'IndexPage',
  layout:"default",
  components:{
    Cover,
    Mission,
    Awards
    /*,
    Inspiration,
    Partners,
    Technology*/
  }
}
</script>
