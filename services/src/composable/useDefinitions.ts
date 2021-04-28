import { computed } from "vue"
import {
  Renderer,
  Service as CreateService,
  // Category as CreateCategory,
} from "@/definitions/definitionGenerator"
import * as category from "@/definitions/pl/categoryDefinitions"
import * as service from "@/definitions/pl/serviceDefinitions"
import { price } from "@/definitions/pl/priceDefinition"

//* create renderer instance, that will render config object
const renderer = new Renderer({
  //* options for rendering application header
  header: {
    //* h1 tag title
    //? change title from .env file in the root of the project
    title: process.env.VUE_APP_SHORT_NAME || "services",
    //* link to Your website
    link: {
      title: "amadeusz.dev",
      href: "https://amadeusz.dev",
    },
    //* skip to the main content link for keyboard users
    skipToMain: {
      title: "Przejdź do głównej treści",
    },
  },
  controls: {
    //* Controls section heading for a11y only
    title: "Ustawienia i nawigacja",
    //* new version available button
    versionControl: {
      tooltip: "Nowa wersja jest gotowa. Zainstaluj ją",
    },
    //* change color scheme button aria-label for a11y only
    colorScheme: {
      buttonLabel: {
        changeToDarkMode: "Aktywuj ciemny motyw",
        changeToLightMode: "Aktywuj jasny motyw",
      },
    },
    //* change mobile navigation toggle button aria-label for a11y only
    navigation: { buttonLabel: "menu nawigacji" },
  },
})

//* If You need to create custom Service follow this example
const serviceInsights = new CreateService({
  brand: {
    //* name of service
    name: "insights",
    //* additional description to clarify service use case for non technical users
    description: "Prosta i przyjazna RODO, analityka",
    //* color of buttons and brand circle
    color: "#2565da", //? use hex format without alpha chanel
    //* color of text on buttons
    onColor: "white", //? prefer to use "black" or "white" keyword
  },
  links: {}, //? in case of custom service it's easier to define links via links function
  price: {
    //* cost of service
    cost: "flexible",
    //* how often Your client need to pay it
    renew: "monthly",
    //* price localization class
    localize: price,
  },
}) //? add links array
  .links(() => [
    {
      //* text on a button of link
      title: "cennik",
      //* description of a button link
      description: "dowiesz się o aktualnych cenach",
      //* href of link
      href: "https://getinsights.io/billing",
    },
    {
      title: "Panel kontrolny",
      description: "Znajdziesz tu aktualne dane analityczne (wymaga logowania)",
      href: "https://getinsights.io/projects/lCc5ds2wBECNisS4",
    },
  ])

renderer.add(category.analytic.add(serviceInsights))

renderer.add(
  category.searchEngine
    .add(
      service.googleSearchConsole(({ initialize }) => [
        initialize("dashboard", {
          href:
            "https://search.google.com/search-console?resource_id=sc-domain%3Aamadeusz.dev",
        }),
      ])
    )
    .add(
      service.microsoftBingWebmasterTool(({ initialize }) => [
        initialize("dashboard", {
          href: "https://www.bing.com/webmasters?siteUrl=https://amadeusz.dev/",
        }),
      ])
    )
)

renderer.add(category.domain.add(service.googleDomains("default-links")))

renderer.add(category.server.add(service.firebase("default-links")))

renderer.add(
  category.development
    .add(
      service
        .developer(() => [
          {
            title: "wyślij",
            description: "wyślij do mnie email na pomoc@amadeusz.dev",
            href: "mailto:pomoc@amadeusz.dev",
          },
        ])
        .brand({ name: "Amadeusz Chomiak" })
    )
    .add(
      service.github(() => [
        {
          title: "Projekt",
          description:
            "Znajdziesz tu kod całego projektu, jak i jego wcześniejsze wersje (wymaga logowania)",
          href: "https://github.com/amadeusz-chomiak/Portfolio-of-Mine",
        },
      ])
    )
)

export const useDefinitions = () => {
  return {
    render: computed(() => renderer.export()), //? is computed if You need to get it as JSON from api
  }
}

//* typescript types
export type Render = ReturnType<Renderer["export"]>
export type Category = Render["categories"][number]
export type Service = Category["services"][number]
