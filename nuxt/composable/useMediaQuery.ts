import { ref, useContext, onBeforeMount } from '@nuxtjs/composition-api'

const getSizeSSR = () => {
  const userAgent = useContext().req?.headers['user-agent']
  const isMobile = userAgent?.toLowerCase()?.includes('mobile')
  return isMobile ? 600 : 1100
}

export const useSize = () => {
  const sm = ref(false)
  const md = ref(false)
  const lg = ref(false)
  const xl = ref(false)
  const resize = () => {
    const width = process.server ? getSizeSSR() : window.innerWidth
    sm.value = width >= 640
    md.value = width >= 768
    lg.value = width >= 1024
    xl.value = width >= 1280
  }
  onBeforeMount(() => {
    resize()
    if (process.client) window.addEventListener('resize', resize)
  })

  return {
    sm,
    md,
    lg,
    xl,
  }
}
