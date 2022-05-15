<template>
 <div>
    <Cover/>
    <Mission/>
    <Inspiration/>
    <Technology/>
    <Partners/>
    <Awards/>
 </div>
</template>

<script>
import Awards from '~/components/home/awards.vue'
import Cover from '~/components/home/cover.vue'
import Inspiration from '~/components/home/inspiration.vue'
import Mission from '~/components/home/mission.vue'
import Partners from '~/components/home/partners.vue'
import Technology from '~/components/home/technology.vue'
export default {
  name: 'IndexPage',
  layout:"default",
  components:{
    Awards,
    Cover,
    Inspiration,
    Mission,
    Partners,
    Technology
  }
}
</script>
