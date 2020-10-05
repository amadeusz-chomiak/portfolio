const baseId = 'auto-generated-id'
let iteration = 0
/**
 * Every time will return unique id
 */
export const useId = () => baseId + '-' + iteration++
