<template>
  <div class="created-using">
    <p class="created-using__copy">Created using <a class="created-using__link" href="https://github.com/jonlabelle/vue-project-template" target="_blank" rel="noopener">jonlabelle/vue-project-template</a>.</p>
  </div>
</template>

<script>
  export default {
    name: "CreatedUsing"
  };
</script>

<style lang="scss">
  @import "src/scss/mixins/content_blocks";

  .created-using {
    border: 1px solid rgba(66, 185, 131, 0.29);
    background-color: rgba(44, 62, 80, 0.02);
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 80%;

    &__copy {
      padding-top: 16px;
    }

    &__link {
      text-decoration: none;
      font-weight: 500;
      color: #42b983;

      &:hover {
        text-decoration: underline;
        color: #42b983;
      }
    }
  }
</style>
