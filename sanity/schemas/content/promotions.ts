//* actual promotions
import {createPage} from '../utils/page'
import {create, createObject, createArray} from '../utils/typedSchema'

export default createPage('Promotion', [
  createArray({
    name: 'Promotions',
    of: [
      createObject({
        name: 'card'
      })
    ]
  }),
  create({
    name: 'Content',
    description: 'Content of Promotion page',
    type: 'LocaleBlockContentComplex'
  }),
])