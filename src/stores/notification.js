import { defineStore } from 'pinia'

let nextId = 1

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: []
  }),

  getters: {
    allNotificaions: (state) => state.notifications
  },

  actions: {
    addNotication(payload) {
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
