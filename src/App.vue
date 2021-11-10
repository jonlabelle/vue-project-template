<template>
  <div class="imposter">
    <router-view />
    <created-using />
    <FooterComponent :year="year" />
  </div>
</template>

<script>
  import CreatedUsing from "@/components/CreatedUsing";
  import FooterComponent from "@/components/FooterComponent";

  export default {
    components: { FooterComponent, CreatedUsing },

    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>

<style lang="scss">
  @import "./scss/main.scss";

  #app {
    @include flex-center(100%);
    text-align: center;
  }

  .imposter {
    @include imposter(0);
  }
</style>
