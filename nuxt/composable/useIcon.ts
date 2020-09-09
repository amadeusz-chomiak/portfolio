import { computed } from '@nuxtjs/composition-api'

export type IconId = 'close' | 'menu'

export const useIcon = (icon: IconId) => {
  const alt = computed(() => {
    switch (icon) {
      case 'close':
        return 'zamknij'
      case 'menu':
        return 'otwórz menu'
    }
  })
  return {
    alt,
  }
}
