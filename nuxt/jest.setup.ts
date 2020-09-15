import { computed } from '@nuxtjs/composition-api'
import '@testing-library/jest-dom'

import Vue from 'vue'

//* BaseComponents
import BaseButton from '~/components/BaseButton.vue'
import BaseCard from '~/components/BaseCard.vue'
import BaseContent from '~/components/BaseContent.vue'
import BaseIcon from '~/components/BaseIcon.vue'

//* Button
import ButtonIcon from '~/components/ButtonIcon.vue'

//* The...
import TheNavigationContent from '~/components/TheNavigationContent.vue'
// @ts-expect-error
window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
}))

//* BaseComponents
Vue.component('BaseButton', BaseButton)
Vue.component('BaseCard', BaseCard)
Vue.component('BaseContent', BaseContent)
Vue.component('BaseIcon', BaseIcon)

//* Button
Vue.component('ButtonIcon', ButtonIcon)

//* The...
Vue.component('TheNavigationContent', TheNavigationContent)

jest.mock('@nuxtjs/composition-api', () => {
  const originalModule = jest.requireActual('@nuxtjs/composition-api')

  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    useContext: jest.fn().mockReturnValue({
      route: {
        value: {
          fullPath: '_fullPath_',
        },
      },
      query: {
        value: undefined,
      },
      from: {
        value: undefined,
      },
      params: {
        value: undefined,
      },
    }),
  }
  //  return {
  //    ...vm[globalNuxt].context,
  //    route: computed(() => vm.$route),
  //    query: computed(() => vm.$route.query),
  //    from: computed(() => vm.$route.redirectedFrom),
  //    params: computed(() => vm.$route.params),
  //  }
})
