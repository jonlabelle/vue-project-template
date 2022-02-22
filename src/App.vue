<template>
  <div class="imposter">
    <notification-container />
    <router-view />
    <created-using />
    <footer-component />
  </div>
</template>

<script>
import CreatedUsing from '@/components/CreatedUsing'
import FooterComponent from '@/components/FooterComponent'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: { FooterComponent, CreatedUsing, NotificationContainer },
  mounted() {
    const notification = {
      type: 'success',
      message: 'Example notification that will dissappear after 10 seconds.',
      duration: 1000 * 10,
    }
    this.$store.dispatch('notification/add', notification, { root: true })
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
