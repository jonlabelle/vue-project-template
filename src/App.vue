<template>
  <div id="app">
    <div class="imposter">
      <router-view />
      <created-using />

      <div class="footer">
        <p class="footer__copy">Copyright &copy; {{ year }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
import CreatedUsing from "@/components/CreatedUsing";

export default {
  components: { CreatedUsing },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
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

.footer {
  &__copy {
    padding: 20px;
  }
}
</style>
