<template>
  <div class="notification-bar alert" :class="notificationTypeClass" role="alert">
    {{ notification.message }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
    this.timeout = setTimeout(() => this.remove(this.notification), this.notification.duration)
  },
  beforeUnmount() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `alert-${this.notification.type}`
    },
  },
  methods: mapActions('notification', ['remove']),
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
