import { Routes } from '../model/types/route.types'

export const routes: Record<Routes, string> = {
  get main() {
    return '/'
  },
  get contacts() {
    return this.main + 'contacts'
  },
  get work() {
    return this.main + 'work'
  },
  get messages() {
    return this.main + 'messeges'
  },
  get notifications() {
    return this.main + 'notifications'
  }
}

