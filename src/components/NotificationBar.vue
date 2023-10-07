<template>
  <div class="notification-bar alert" :class="notificationTypeClass" role="alert">
    <div>{{ notification.message }}</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()

const props = defineProps({
  notification: {
    type: Object,
    required: true,
    default() {
      return { id: 0, message: '', type: '', duration: 0 }
    }
  }
})

const timeout = ref(null)

const notificationTypeClass = computed(() => `alert-${props.notification.type}`)

onMounted(() => {
  timeout.value = setTimeout(
    () => notificationStore.removeNotification(props.notification),
    props.notification.duration
  )
})

onBeforeUnmount(() => {
  window.clearTimeout(timeout)
})
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
