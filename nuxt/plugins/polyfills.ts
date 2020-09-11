if (process.client) {
  if (!('IntersectionObserver' in window)) {
    // @ts-expect-error
    import('intersection-observer')
  }
}
