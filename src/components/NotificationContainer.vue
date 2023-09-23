<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in allNotifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNotificationStore } from '@/stores/notification'
import NotificationBar from '@/components/NotificationBar.vue'

const notificationStore = useNotificationStore()
const allNotifications = computed(() => notificationStore.allNotificaions)
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
