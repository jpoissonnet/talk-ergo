import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'
import { recorder } from '@slidev/client/logic/recording.ts'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'Alt+c',
      fn: () => recorder.toggleAvatar(),
    },
  ]
})
