import '@testing-library/jest-dom'
import Vue from 'vue'

import BaseButton from '~/components/BaseButton.vue'
import BaseCard from '~/components/BaseCard.vue'
import BaseContent from '~/components/BaseContent.vue'

Vue.component('BaseButton', BaseButton)
Vue.component('BaseCard', BaseCard)
Vue.component('BaseContent', BaseContent)
