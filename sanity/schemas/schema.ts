// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//* import content schemas
import privacyPolicy from './content/privacyPolicy'
import pagePromotions from './content/pagePromotions'
import promotion from './content/promotion'

//* import types schemas
import pageMeta from './types/pageMeta'
import blockContentBasic from './types/blockContentBasic'
import blockContentComplex from './types/blockContentComplex'

//* import components schemas
import card from './components/card'
import button from './components/button'
import definition from './components/definition'

//* Import locales
// import blockContent from './locale/BlockContent'
import localeString from './locale/string'
import localeText from './locale/text'
import localeBlockContentBasic from './locale/blockContentBasic'
import localeBlockContentComplex from './locale/blockContentComplex'
// import localeBlockContent from './locale/BlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   
    //* content schemas
    privacyPolicy,
    pagePromotions,
    promotion,

    // types schemas
    pageMeta,
    blockContentBasic,
    blockContentComplex,

    // components schemas
    card,
    button,
    definition,

    // locales schemas
    localeText,
    localeString,
    localeBlockContentBasic,
    localeBlockContentComplex,
  ])
})
