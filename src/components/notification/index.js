import Notification from './instance'

let isAutoClose = true
let defaultDuration = 5
let showCountDownBar = false
let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance({
    show: countdownBar,
    options: {
      content,
      duration,
      type,
      autoClose
    }
  })

  return messageInstance
}

function notice (content = '', duration = defaultDuration, type, autoClose = isAutoClose, countdownBar = showCountDownBar) {
  const _props = {
    show: countdownBar,
    options: {
      content,
      duration,
      type,
      autoClose
    }
  }

  const Instance = new Vue({
    data: _props,
    render (h) {
      return h(Notification, {
        props: _props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
}

const methods = {
  success (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'success', options.autoClose, options.countdownBar)
  },
  error (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'error', options.autoClose, options.countdownBar)
  },
  info (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'info', options.autoClose, options.countdownBar)
  },
  warning (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'warning', options.autoClose, options.countdownBar)
  },
  flexible (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'flexible', options.autoClose, options.countdownBar)
  }
}

export default {
  install (Vue) {
    Vue.prototype.$Aleter = methods
  }
}
