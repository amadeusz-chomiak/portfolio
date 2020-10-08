import Vue from 'vue'

// @ts-expect-error
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'

// @ts-expect-error
import { uniTimes, uniEllipsisV } from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([uniTimes, uniEllipsisV])
Vue.use(Unicon, { fill: 'unset', width: '100%', height: '100%' })
