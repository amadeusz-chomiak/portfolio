import { init, track, trackPages, TrackEventPayload } from 'insights-js'

interface TrackEvent {
  (name: 'link-github'): Promise<void>
  (name: 'link-mailto'): Promise<void>
  (name: 'link-services-panel'): Promise<void>
  (name: 'show-contact-info'): Promise<void>
  (name: 'engagement', props: TrackEventPayload['parameters']): Promise<void>
  (
    name: string,
    props?: TrackEventPayload['parameters'],
    delay?: number
  ): Promise<void>
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
    if (process.server || process.env.NODE_ENV === 'development') return
    try {
      init('lCc5ds2wBECNisS4')
      trackPages()
    } catch (error) {
      console.log(error)
    }
  }

  const timeouts = new Map<string, [NodeJS.Timeout, () => void]>()

  /**
   * track plausible event
   * @param name tracker name
   * @param parameters additional props
   * @param delay give some time to cancel
   */
  const trackEvent: TrackEvent = (
    name: string,
    parameters: TrackEventPayload['parameters'] = {},
    delay: number = 0
  ) =>
    new Promise<void>((resolve) => {
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('track', name, 'options', parameters)
      //   return resolve()
      // }
      if (delay)
        timeouts.set(name, [
          setTimeout(() => {
            if (process.env.NODE_ENV === 'development')
              console.log('track - finish delay', name, 'options', parameters)
            return resolve(track({ id: name, parameters }))
          }, delay),
          resolve,
        ])
      else resolve(track({ id: name, parameters }))
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
