<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from "vuex"; //mapeando atributos da store

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"]) //coletando o atributo desejado para dentro deste componente
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
