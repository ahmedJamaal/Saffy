<template>
  <div class="logo">
  <h4>Saffy</h4>
    <img
    class="vuetify-logo"
    alt="Vuetify Logo"
    src="/logo.svg"
  >
  </div>
</template>

<style>
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
      padding-left: 40px;

}
.logo h4 {
  color: black;
  font-size: 14px;

}
.vuetify-logo {
  height: 100%;
     width: 55%;
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
