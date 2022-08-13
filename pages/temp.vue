
<template>
  <div id="app">

  </div>
</template>


<script>


export default {
  name: 'IndexPage',
  layout:"empty",
        head() {
    return {
      titleTemplate: `%s - Homes`,
    };
  },
  components:{

  },
data(){
  return {
mobileView: true,
      showNav: false
  }

},
  methods: {
    handleView() {
      //this.mobileView = window.innerWidth <= 990;
    }
  },
  mounted(){
    console.log(this.baseUrl);
  },
    created() {
    this.handleView();
    //window.addEventListener('resize', this.handleView);
  }

}
</script>
