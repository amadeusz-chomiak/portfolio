import Plausible from 'plausible-tracker'

let plausible: ReturnType<typeof Plausible>

interface OptionsEngagement {
  href: string
}

interface TrackEvent {
  (name: 'link-github'): void
  (name: 'link-mailto'): void
  (name: 'link-services-panel'): void
  (name: 'show-contact-info'): void
  (name: 'engagement', options: OptionsEngagement): void
  (name: string, options?: OptionsEngagement, delay?: number): void
}

export const useAnalytics = () => {
  const initAnalytics = () => {
    if (process.server) return
    plausible = Plausible({
      domain: 'amadeusz.dev',
      // trackLocalhost: true,
    })

    plausible.enableAutoPageviews()
  }

  const timeouts = new Map<string, NodeJS.Timeout>()

  const trackEvent: TrackEvent = (
    name: string,
    options?: object,
    delay: number = 0
  ) => {
    if (process.env.NODE_ENV === 'development')
      console.log('track', name, 'options', options)
    if (delay)
      timeouts.set(
        name,
        setTimeout(() => {
          if (process.env.NODE_ENV === 'development')
            console.log('track - finish delay', name, 'options', options)
          plausible?.trackEvent(name, options)
        }, delay)
      )
    else plausible?.trackEvent(name, options)
  }

  const untractEvent: TrackEvent = (name: string) => {
    const timeout = timeouts.get(name)
    if (timeout) clearTimeout(timeout)
  }

  return {
    initAnalytics,
    trackEvent,
    untractEvent,
  }
}
