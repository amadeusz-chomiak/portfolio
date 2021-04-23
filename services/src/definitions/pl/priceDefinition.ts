import { Price } from "../definitionGeneratorPrice"

export const price = new Price({
  cost: {
    free: "darmowa",
    paid: "płatna",
    flexible: "darmowa w limicie, potem płatna",
  },
  renew: {
    never: "jednorazowo",
    onDemand: "na zlecenie",
    daily: "co dziennie",
    weekly: "co tydzień",
    monthly: "co miesiąc",
    quarterly: "co kwartał",
    yearly: "co rok",
  },
  compose({ renew, cost }) {
    if (renew) {
      return `Usługa ${cost} ${renew}`
    }
    return cost
  },
})