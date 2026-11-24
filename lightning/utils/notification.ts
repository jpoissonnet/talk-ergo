import { shallowRef } from 'vue'

export type Notification = {
  id: number
  appName: string
  channel: string
  author: string
  msg: string
  icon: string
}

export const current = shallowRef<Notification | null>(null)

let nextId = 0
let timer: ReturnType<typeof setTimeout> | undefined

export function dismiss() {
  clearTimeout(timer)
  current.value = null
}

export function notify(data: Omit<Notification, 'id'>, duration: number) {
  clearTimeout(timer)
  current.value = { id: nextId++, ...data }
  timer = setTimeout(dismiss, duration)
}
