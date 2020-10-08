import { useContext, reactive, onMounted } from '@nuxtjs/composition-api'

const isMobileSSR = () => {
  const userAgent = useContext().req?.headers['user-agent']
  return userAgent?.toLowerCase()?.includes('mobile')
}

const getWidthSSR = () => {
  return isMobileSSR() ? 600 : 1100
}

export const useSize = () => {
  const width = reactive({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const height = reactive({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const resize = () => {
    const windowWidth = process.server ? getWidthSSR() : window.innerWidth
    width.sm = windowWidth >= 640
    width.md = windowWidth >= 768
    width.lg = windowWidth >= 1024
    width.xl = windowWidth >= 1280

    const windowHeight = process.server ? 600 : window.innerHeight
    height.sm = windowHeight >= 400
    height.md = windowHeight >= 680
    height.lg = windowHeight >= 800
    height.xl = windowHeight >= 1000
  }
  onMounted(() => {
    resize()
    if (process.client) window.addEventListener('resize', resize)
  })

  return {
    width,
    height,
  }
}

export const useClass = () => ({
  classes: (condition: boolean, ...classes: string[]) =>
    condition ? classes : [],
})
