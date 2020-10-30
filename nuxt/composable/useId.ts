import { ref } from '@nuxtjs/composition-api'

const baseId = 'auto-generated-id'
let iteration = 0
/**
 * Every time will return unique id
 */
export const useId = () => {
  const id = ref(baseId + '-' + iteration++)
  return {
    id,
  }
}
