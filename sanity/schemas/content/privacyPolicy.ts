//* privacy policy and lawyer info
import {createPage} from '../utils/page'
import {create, createObject} from '../utils/typedSchema'

export default createPage('Privacy', [
  createObject({
    name: 'Author',
    description: 'Card for privacy policy author',
    type: 'Card'
  }),
  // todo add block content block
])