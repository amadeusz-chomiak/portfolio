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

//* BaseComponents
Vue.component('BaseButton', BaseButton)
Vue.component('BaseCard', BaseCard)
Vue.component('BaseContent', BaseContent)
Vue.component('BaseIcon', BaseIcon)

//* Button
Vue.component('ButtonIcon', ButtonIcon)

//* The...
Vue.component('TheNavigationContent', TheNavigationContent)
