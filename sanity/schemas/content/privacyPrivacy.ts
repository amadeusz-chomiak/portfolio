//* privacy policy and lawyer info
import {createPage} from '../utils/page'
import {create, createObject} from '../utils/typedSchema'

export default createPage('pagePrivacy', [
  createObject({
    name: 'cookie',
    description: 'cookie definition',
    type: 'card',
    required: 'error',
  }),
  createObject({
    name: 'author',
    description: 'card for privacy policy author',
    type: 'card',
  }),
  createObject({
    name: 'content',
    description: 'content of privacy policy',
    type: 'localeBlockContent',
    required: 'error',
  }),
])