//* privacy policy and lawyer info
import {createPage} from '../utils/page'
import {create, createObject} from '../utils/typedSchema'

export default createPage('Privacy', [
  create({
    name: 'Cookie',
    description: 'Cookie definition',
    type: 'Card'    
  }),
  createObject({
    name: 'Author',
    description: 'Card for privacy policy author',
    type: 'Card'
  }),
  create({
    name: 'Content',
    description: 'Content of privacy policy',
    type: 'LocaleBlockContentComplex'
  }),
])