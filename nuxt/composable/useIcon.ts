import { computed, Ref } from '@nuxtjs/composition-api'

export type IconId = 'close' | 'menu' | 'github'

export const useIcon = (icon: Ref<IconId>) => {
  const alt = computed(() => {
    switch (icon.value) {
      case 'close':
        return 'zamknij'
      case 'menu':
        return 'otwórz menu'
      case 'github':
        return 'logo Github'
    }
  })

  const unicon = computed(() => {
    switch (icon.value) {
      case 'close':
        return 'times'
      case 'menu':
        return 'ellipsis-v'
      default:
        return undefined
    }
  })
  return {
    alt,
    unicon,
  }
}
