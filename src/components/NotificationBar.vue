<template>
  <div class="notification-bar alert" :class="notificationTypeClass" role="alert">
    {{ notification.message }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { notificationTypes as types } from '@/store/modules/notification'

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.removeNotification(this.notification), this.notification.duration)
  },
  beforeUnmount() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `alert-${this.notification.type}`
    },
  },
  methods: mapActions(types.notification, [types.removeNotification]),
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
