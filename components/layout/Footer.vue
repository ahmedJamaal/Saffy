<template>
  <v-footer padless>
    <v-card flat tile class="primary white--text text-center">


      <v-card-text class="white--text pt-3">
        To learn more about us
      </v-card-text>
  <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 "
          :href="icon.link"
          target="_blank"
          x-small

        >
            {{ icon.text }}

        </v-btn>
      </v-card-text>
      <v-divider />

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Saffy Water</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: 'Contact us',
        link: '#'
      },
      {
        text: 'Our products',
        link: '#'
      },
      {
        text: 'Saffy technology',
        link: '#'
      },
      {
        text: 'Who we are',
        link: '#'
      }
    ]
  })
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
