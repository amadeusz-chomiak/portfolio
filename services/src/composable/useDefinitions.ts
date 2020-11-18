import { computed, onBeforeMount, ref } from "vue"
import { Renderer } from "@/definitions/definitionGenerator"
import * as category from "@/definitions/pl/categoryDefinitions"
import * as service from "@/definitions/pl/serviceDefinitions"

export const useDefinitions = () => {
  const renderer = new Renderer({
    header: {
      title: "Panel usług",
      link: {
        title: "amadeusz.dev",
        href: "https://amadeusz.dev",
      },
    },
  })

  // renderer.add(category.contentEditor.add(service.sanity))
  renderer.add(
    category.analytic.add(
      service.plausible
        .links("add", "dashboard", {
          title: "Panel kontrolny",
          description:
            "Znajdziesz tu aktualne dane analityczne (wymaga logowania)",
          href: "https://plausible.io/login",
        })
        .links("initialize", "pricing", {
          title: "cennik",
          description: "dowiesz się o aktualnych cenach",
        })
    )
  )
  renderer.add(category.server.add(service.firebase))

  renderer.add(category.domain.add(service.googleDomains))

  renderer.add(
    category.development
      .add(
        service.developer
          .links("add", "email", {
            title: "wyślij",
            description: "wyślij do mnie email na pomoc@amadeusz.dev",
            href: "mailto:pomoc@amadeusz.dev",
          })
          .brand({ name: "Amadeusz Chomiak" })
      )
      .add(
        service.github.links("add", "project", {
          title: "Projekt",
          description:
            "Znajdziesz tu kod całego projektu, jak i jego wcześniejsze wersje (wymaga logowania)",
          href: "https://github.com/amadeusz-chomiak/Portfolio-of-Mine",
        })
      )
  )

  return {
    render: computed(() => renderer.export()), //? is computed if You need to get it as JSON from api
  }
}

export type Render = ReturnType<Renderer["export"]>
export type Category = Render["categories"][number]
export type Service = Category["services"][number]
