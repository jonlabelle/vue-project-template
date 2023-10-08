<script setup>
import { onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()

onMounted(() => {
  const notification = {
    type: 'success',
    message: 'This notification will dissappear after 5 seconds...',
    duration: 1000 * 5
  }
  notificationStore.addNotification(notification)
})
</script>

<template>
  <main>
    <TheWelcome />
    <NotificationContainer />
  </main>
</template>
