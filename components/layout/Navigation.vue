<template>
  <div>
    <v-app-bar
      app
      absolute
       color="white"
      :flat="flat"
      dark
      :class="{ expand: flat }"
    >
      <v-toolbar-title>

          <logo />

      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        color="primary"
        v-if="isXs"
      />
      <div v-else >
        <nuxt-link v-for="(item, i) in items"
          :key="i"
        :to="item.link"
        router
        exact
        class="mx-2"
        color="primary"
        small
        >
          <span class="mr-2">{{item.name}}</span>
        </nuxt-link>
      </div>
    </v-app-bar>
  </div>
</template>


<script>
import logo from '~/components/layout/VuetifyLogo.vue'
export default {
  components:{
    logo
  },
  data: () => ({
    drawer: null,
    isXs: false,
    color: "#efefef",
    flat: true,
   items: [
      {name:"Home", link:"/"},
      {name:"Our story", link:"/ourStory"},
      {name:"Saffy technology", link:"/saffy-technology"},
      {name:"Products", link:"/products"},
      {name:"Contact Us", link:"/contact-us"},
    ],
  }),
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
