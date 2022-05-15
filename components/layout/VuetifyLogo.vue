<template>
  <div class="logo">
    <img
    class="vuetify-logo"
    alt="Vuetify Logo"
    :src="`${$config.BASE_URL}/logo.svg`"
  >
  <h6>Saffy</h6>
  </div>
</template>

<style>
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;

}
.logo h6 {
  color: black;

}
.vuetify-logo {
  height: 120px;
  width: 120px;
  color: brown;
 /* transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
*/
}
/*
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}*/
</style>
