<template>
  <div class="imposter">
    <router-view />
    <created-using />
    <footer-component />
  </div>
</template>

<script>
import CreatedUsing from '@/components/CreatedUsing'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    FooterComponent,
    CreatedUsing,
  },
}
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
  @include flex-center(100%);
  text-align: center;
}

.imposter {
  @include imposter(0);
}
</style>
