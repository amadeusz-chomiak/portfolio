import * as service from "../global/serviceDefinitions"
import { price } from "./priceDefinition"

export const firebase = service.Firebase({
  brand: {
    description:
      "Stworzony przez Google, wielozadaniowy serwer, zapewnia hosting, bazę danych, analitykę i wiele więcej",
  },
  price: {
    localize: price,
  },
  links: {
    pricing: {
      title: "cennik",
      description: "dowiesz się o aktualnych cenach",
    },
    dashboard: {
      title: "panel kontrolny",
      description:
        "dowiesz się o wszystkich aspektach usługi (wymaga logowania)",
    },
  },
})

export const plausible = service.Plausible({
  brand: {
    description: "Prosta i przyjazna RODO, analityka",
  },
  price: {
    localize: price,
  },
  links: {
    pricing: {
      title: "cennik",
      description: "dowiesz się o aktualnych cenach",
    },
  },
})

export const sanity = service.Sanity({
  brand: {
    description: "System CMS dzięki któremu z łatwością zmienisz treść strony",
  },
  price: {
    localize: price,
  },
  links: {
    pricing: {
      title: "cennik",
      description: "Dowiesz się o aktualnych cenach",
    },
  },
})

export const developer = service.Developer({
  brand: {
    name: "Amadeusz Chomiak",
    description:
      "Stwórzmy Twoją część internetu! Jeśli potrzebujesz pomocy, napisz do mnie",
  },
  price: {
    localize: price,
  },
  links: {},
})

export const googleDomains = service.GoogleDomains({
  brand: {
    name: "domeny Google",
    description:
      "Zapewniają wygodną i szybką rejestrację domen z darmową certyfikacją zabezpieczeń SSL",
  },
  price: {
    localize: price,
  },
  links: {
    dashboard: {
      title: "panel kontrolny",
      description: "Sprawdź stan Twoich domen (wymaga logowania)",
    },
    payments: {
      title: "koszty",
      description: "Dowiesz się o aktualnych wydatkach (wymaga logowania)",
    },
  },
})

export const googleSearchConsole = service.GoogleSearchConsole({
  brand: {
    description: "Zarządza widocznością Tej strony w wyszukiwarce Google",
  },
  price: {
    localize: price,
  },
  links: {
    dashboard: {
      title: "panel kontrolny",
      description:
        "sprawdź jak dobrze strona radzi sobie w wyszukiwarce Google (wymaga logowania)",
    },
  },
})

export const microsoftBingWebmasterTool = service.MicrosoftBingWebmasterTool({
  brand: {
    description: "Zarządza widocznością Tej strony w wyszukiwarce Bing",
  },
  price: {
    localize: price,
  },
  links: {
    dashboard: {
      title: "panel kontrolny",
      description:
        "sprawdź jak dobrze strona radzi sobie w wyszukiwarce Bing (wymaga logowania)",
    },
  },
})

export const github = service.Github({
  brand: {
    description:
      "Serce projektu. Zapewnia miejsce dla kodu całej aplikacji internetowej",
  },
  price: {
    localize: price,
  },
  links: {},
})
