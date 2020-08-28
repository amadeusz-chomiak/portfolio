// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//* import content schemas
import privacyPolicy from './content/privacyPolicy'

//* import types schemas
import pageMeta from './types/pageMeta'

//* import components schemas
import card from './components/card'

//* Import locales
// import blockContent from './locale/BlockContent'
import localeString from './locale/string'
import localeText from './locale/text'
import blockContentBasic from './locale/blockContentBasic'
import blockContentComplex from './locale/blockContentComplex'
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

    // types schemas
    pageMeta,

    // components schemas
    card,

    // locales schemas
    localeText,
    localeString,
    blockContentBasic,
    blockContentComplex,
  ])
})
