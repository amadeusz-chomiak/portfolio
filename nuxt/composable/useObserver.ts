import { onMounted, watchEffect } from '@nuxtjs/composition-api'

export interface ObserverPropType {
  observer: IntersectionObserver
}

export const useObserverProp = () => ({
  observer: {},
})

export const useObserverObserve = (
  props: ObserverPropType,
  componentId: string
) => {
  onMounted(() => {
    watchEffect(() => {
      if (props.observer) {
        const element = document.getElementById(componentId)
        if (element) {
          props.observer.observe(element)
          // console.log('observer', props.observer)
        }
        // else {
        // console.error('no element', props.observer)
        // }
      }
      // else console.error('no observer', props.observer)
    })
  })
}
