import { defineStore } from 'pinia'

let nextId = 1

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: []
  }),

  getters: {
    allNotifications: (state) => state.notifications
  },

  actions: {
    addNotification(payload) {
      this.notifications.push({
        ...payload,
        id: nextId++
      })
    },

    removeNotification(payload) {
      this.notifications = this.notifications.filter(
        (notification) => notification.id !== payload.id
      )
    }
  }
})
