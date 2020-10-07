import { computed } from '@nuxtjs/composition-api'

export type IconId = 'close' | 'menu' | 'github'

export const useIcon = (icon: IconId) => {
  const alt = computed(() => {
    switch (icon) {
      case 'close':
        return 'zamknij'
      case 'menu':
        return 'otwórz menu'
      case 'github':
        return 'logo Github'
    }
  })
  return {
    alt,
  }
}
