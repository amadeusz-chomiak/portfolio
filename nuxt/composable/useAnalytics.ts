import Plausible, { EventOptions } from 'plausible-tracker'

let plausible: ReturnType<typeof Plausible>

interface TrackEvent {
  (name: 'link-github'): Promise<void>
  (name: 'link-mailto'): Promise<void>
  (name: 'link-services-panel'): Promise<void>
  (name: 'show-contact-info'): Promise<void>
  (name: 'engagement', props: EventOptions['props']): Promise<void>
  (name: string, props?: EventOptions['props'], delay?: number): Promise<void>
}

interface UntrackEvent {
  (name: 'link-github'): void
  (name: 'link-mailto'): void
  (name: 'link-services-panel'): void
  (name: 'show-contact-info'): void
  (name: 'engagement'): void
  (name: string): void
}

export const useAnalytics = () => {
  const initAnalytics = () => {
    if (process.server) return
    plausible = Plausible({
      domain: 'amadeusz.dev',
      // trackLocalhost: true,
    })

    plausible.enableAutoPageviews()
    plausible.trackEvent('', { props: {} })
  }

  const timeouts = new Map<string, [NodeJS.Timeout, () => void]>()

  /**
   * track plausible event
   * @param name tracker name
   * @param props additional props
   * @param delay give some time to cancel
   */
  const trackEvent: TrackEvent = (
    name: string,
    props: EventOptions['props'] = {},
    delay: number = 0
  ) =>
    new Promise<void>((resolve) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('track', name, 'options', props)
        return resolve()
      }
      if (delay)
        timeouts.set(name, [
          setTimeout(() => {
            if (process.env.NODE_ENV === 'development')
              console.log('track - finish delay', name, 'options', props)
            plausible?.trackEvent(name, { props, callback: resolve })
          }, delay),
          resolve,
        ])
      else plausible?.trackEvent(name, { props, callback: resolve })
    })

  const untractEvent: UntrackEvent = (name: string) => {
    const timeout = timeouts.get(name)
    if (timeout) {
      clearTimeout(timeout[0])
      timeout[1]()
      timeouts.delete(name)
    }
  }

  return {
    initAnalytics,
    trackEvent,
    untractEvent,
  }
}
