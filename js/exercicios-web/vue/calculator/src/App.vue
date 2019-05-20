<template>
  <div id="app">
    <h1>Calculatora</h1>
    <Calculator/>
  </div>
</template>

<script>
import Calculator from "./main/Calculator";

export default {
  components: { Calculator }
};
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/Roboto_Mono/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  color: #ffff;
  background: linear-gradient(to right, rgb(83, 105, 108), rgb(41, 46, 73));
}
</style>
