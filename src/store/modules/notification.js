export const notificationTypes = {
  notification: 'notification',
  allNotifications: 'allNotifications',
  addNotification: 'addNotification',
  removeNotification: 'removeNotification',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

export const namespaced = true

export const state = () => ({
  notifications: [],
})

let nextId = 1

export const getters = {
  allNotifications(state) {
    return state.notifications
  },
}

export const mutations = {
  [notificationTypes.ADD](state, payload) {
    state.notifications.push({
      ...payload,
      id: nextId++,
    })
  },

  [notificationTypes.REMOVE](state, payload) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== payload.id
    )
  },
}

export const actions = {
  addNotification({ commit }, payload) {
    commit(notificationTypes.ADD, payload)
  },

  removeNotification({ commit }, payload) {
    commit(notificationTypes.REMOVE, payload)
  },
}
