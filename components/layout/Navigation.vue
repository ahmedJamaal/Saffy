<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary

      color="primary"

    >

      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <logo />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Saffys</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
         v-for="(item, i) in items"
          :key="i"
        :to="item.link"
        router
        exact
        >

          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              item.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>

          <logo />

      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else >
        <v-btn v-for="(item, i) in items"
          :key="i"
        :to="item.link"
        router
        exact
        class="mx-2"
        color="primary"
        small
        >
          <span class="mr-2">{{item.name}}</span>
        </v-btn>
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
