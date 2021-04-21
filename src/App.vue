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

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

pre,
code {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a:hover {
  text-decoration: none;
  border-bottom: 1px solid #42b983;
}
</style>
