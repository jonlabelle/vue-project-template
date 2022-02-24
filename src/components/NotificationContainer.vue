<template>
  <div class="notification-container">
    <NotificationBar v-for="notification in allNotifications" :key="notification.id" :notification="notification" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { notificationTypes as types } from '@/store/modules/notification'
import NotificationBar from '@/components/NotificationBar.vue'

export default {
  components: {
    NotificationBar,
  },
  computed: {
    ...mapGetters(types.notification, [types.allNotifications]),
  },
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
