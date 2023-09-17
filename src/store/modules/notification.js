import { reactive } from 'vue'

export const notificationTypes = {
  notification: 'notification',
  allNotifications: 'allNotifications',
  addNotification: 'addNotification',
  removeNotification: 'removeNotification',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
}

export const namespaced = true

export const state = reactive({
  notifications: [],
})

let nextId = 1

export const getters = {
  allNotifications(state) {
    return state.notifications
  },
}

export const mutations = {
  [notificationTypes.ADD_NOTIFICATION](state, payload) {
    state.notifications.push({
      ...payload,
      id: nextId++,
    })
  },

  [notificationTypes.REMOVE_NOTIFICATION](state, payload) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== payload.id
    )
  },
}

export const actions = {
  addNotification({ commit }, payload) {
    commit(notificationTypes.ADD_NOTIFICATION, payload)
  },

  removeNotification({ commit }, payload) {
    commit(notificationTypes.REMOVE_NOTIFICATION, payload)
  },
}
