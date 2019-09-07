<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "app",
  components: {
    home: Home
  }
};
</script>

<style class="scss">
body {
  width: 100%;
  margin: 0;
  padding: 0;
  background: lightgray;
}
</style>
