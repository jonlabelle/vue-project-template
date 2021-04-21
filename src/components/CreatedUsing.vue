<template>
  <div class="created-using">
    <p>Created using <a href="https://github.com/jonlabelle/vue-project-template" target="_blank" rel="noopener">jonlabelle/vue-project-template</a>.</p>
  </div>
</template>

<script>
export default {
  name: "CreatedUsing"
};
</script>

<style scoped>
.created-using {
  border: 1px solid rgba(66, 185, 131, 0.29);
  width: 50%;
  margin: 50px auto 20px;
  padding: 5px;
  background-color: rgba(44, 62, 80, 0.02);
}

.created-using a {
  text-decoration: none;
  font-weight: 500;
  color: #42b983;
}

.created-using a:hover {
  text-decoration: underline;
}
</style>
