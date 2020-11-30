import { Category } from '../definitionGenerator'

export const analytic = new Category({
  name: 'analityka',
  description: 'sprawdź jak sobie radzisz'
})

export const domain = new Category({
  name: 'domena',
  description: 'twoja nazwa w internecie'
})

export const searchEngine = new Category({
  name: 'wyszukiwarki',
  description: 'czy łatwo Cię znaleźć'
})

export const server = new Category({
  name: 'serwer',
  description: 'gdzie są dane tej strony'
})

export const development = new Category({
  name: 'rozwój projektu',
  description: 'gdy chcesz dodać coś nowego'
})

export const contentEditor = new Category({
  name: 'edycja treści',
  description: 'by zmienić co jest na stronie'
})