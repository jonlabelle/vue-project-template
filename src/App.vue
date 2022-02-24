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
import { notificationTypes as types } from '@/store/modules/notification'

export default {
  components: {
    FooterComponent,
    CreatedUsing,
    NotificationContainer,
  },
  mounted() {
    const notification = {
      type: 'success',
      message: 'This notification will dissappear after 5 seconds...',
      duration: 1000 * 5,
    }
    this.$store.dispatch(`${types.notification}/${types.addNotification}`, notification, { root: true })
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
