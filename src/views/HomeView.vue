<template>
  <div class="home">
    <notification-container />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { notificationTypes as types } from '@/store/modules/notification'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
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
