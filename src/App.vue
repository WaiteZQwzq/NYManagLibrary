<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router></router>
  </div>
</template>

<script>
import Mheader from "./components/m-header/m-header.vue"
import tab from "./components/tab/tab.vue";
export default {
  name: "App",
  components: {
    "m-header":Mheader,
    tab
  }
};
</script>

<style lang="stylus" scoped>
@import "./common/stylus/variable.styl";

#app {
  color: $color-theme;
}
</style>
