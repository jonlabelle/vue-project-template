<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <created-using />
  </div>
</template>

<script>
import CreatedUsing from "@/components/CreatedUsing";

export default {
  components: { CreatedUsing }
};
</script>

<style lang="scss">
@import "./assets/styles/global.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
