<template>
  <div id="app">
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
       <Slide v-if="isXs" right >
      <!-- <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        color="primary"
        v-if="isXs"
      /> -->
     <nuxt-link v-for="(item, i) in items"
          :key="i"
        :to="item.link"
        router
        exact
        class="mx-2 nav-links"
        color="primary"
        small
        >
          <span class="mr-2">{{item.name}}</span>
        </nuxt-link>
    </Slide>
      <div v-else >
        <nuxt-link v-for="(item, i) in items"
          :key="i"
        :to="item.link"
        router
        exact
        class="mx-2 nav-links"
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
import logo from '~/components/layout/logo.vue'
// import { Slide } from 'vue-burger-menu';

export default {
  components:{
    logo,
   // Slide
  },
  data: () => ({
    drawer: null,
    isXs: false,
    color: "#efefef",
    flat: true,
   items: [
      // {name:"Home", link:"/"},
      // {name:"The Mission", link:"/Mission"},
      // {name:"The Inspiration", link:"/Inspiration"},
      // {name:"Saffy Technology", link:"/Saffy-Technology"},
      // {name:"Our story", link:"/ourStory"},
      // {name:"News", link:"/News"},
      // {name:"Contact", link:"/Contact-US"},
      {name:"Home", link:"#"},
      {name:"Mission", link:"#"},
      {name:"Inspiration", link:"#"},
      {name:"Saffy Technology", link:"#"},
      {name:"Our story", link:"#"},
      {name:"News", link:"#"},
      {name:"Contact", link:"#"},
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

<style>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
.nav-links {
  text-decoration: none;
      font-size: 0.7rem !important;
        color: var(--nav-color);
}

 .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 22% !important;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100vh !important; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>
