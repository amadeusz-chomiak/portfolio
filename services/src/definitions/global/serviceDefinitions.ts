import { createService } from "../definitionGenerator"

export const Firebase = createService({
  brand: {
    name: "firebase",
    color: "#FFA000",
    onColor: "black",
  },
  links: {
    dashboard: "https://console.firebase.google.com/",
    pricing: "https://firebase.google.com/pricing",
  },
  price: {
    cost: "flexible",
    renew: "monthly",
  },
})

export const Plausible = createService({
  brand: {
    name: "plausible",
    color: "#5850ec",
    onColor: "white",
  },
  links: {
    pricing: "https://plausible.io/#pricing",
  },
  price: {
    cost: "paid",
    renew: "yearly",
  },
})

export const Insights = createService({
  brand: {
    name: "insights",
    color: "#2565da",
    onColor: "white",
  },
  links: {
    pricing: "https://getinsights.io/billing",
  },
  price: {
    cost: "flexible",
    renew: "monthly",
  },
})

export const Sanity = createService({
  brand: {
    name: "sanity",
    color: "#f03e2f",
    onColor: "white",
  },
  links: {
    pricing: "https://www.sanity.io/pricing/compare",
  },
  price: {
    cost: "flexible",
    renew: "monthly",
  },
})

export const Developer = createService({
  brand: {
    name: "developer",
    color: "#3e61a5",
    onColor: "white",
  },
  links: {},
  price: {
    cost: "paid",
    renew: "onDemand",
  },
})

export const GoogleDomains = createService({
  brand: {
    name: "google domains",
    color: "#f8f9fa",
    onColor: "black",
  },
  links: {
    dashboard: "https://domains.google.com/registrar/",
    payments: "https://domains.google.com/registrar/billing",
  },
  price: {
    cost: "paid",
    renew: "yearly",
  },
})

export const GoogleSearchConsole = createService({
  brand: {
    name: 'google search console',
    color: '#455a64',
    onColor: 'white',
  },
  price: {
    cost: 'free',
    renew: 'never',
  },
  links: {
    dashboard: 'https://search.google.com/search-console'
  }
})

export const MicrosoftBingWebmasterTool = createService({
  brand: {
    name: 'microsoft bing webmaster tool',
    color: '#00809d',
    onColor: 'white',
  },
  price: {
    cost: 'free',
    renew: 'never',
  },
  links: {
    dashboard: 'https://www.bing.com/webmasters'
  }
})

export const Github = createService({
  brand: {
    name: "github",
    color: "#24292e",
    onColor: "white",
  },
  links: {},
  price: {
    cost: "free",
    renew: "never"
  },
})
