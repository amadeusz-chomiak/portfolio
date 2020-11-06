import Vue from 'vue'
import Unicon from 'vue-unicons'
// @ts-expect-error
import { uniTimes, uniEllipsisV } from 'vue-unicons/src/icons'

Unicon.add([uniTimes, uniEllipsisV])
Vue.use(Unicon, { fill: 'unset', width: '100%', height: '100%' })
