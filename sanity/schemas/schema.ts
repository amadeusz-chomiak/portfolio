// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//* import content schemas
import site from './content/site'
import privacyPolicy from './content/privacyPrivacy'
import pageAbout from './content/pageAbout'
import pageContact from './content/pageContact'
import pageHero from './content/pageHero'
import pageSolution from './content/pageSolution'
import solution from './content/solution'
import pagePromotions from './content/pagePromotion'
import promotion from './content/promotion'

//* import types schemas
import pageMeta from './types/pageMeta'
import blockContent from './types/blockContent'

//* import components schemas
import card from './components/card'
import button from './components/button'
import definition from './components/definition'

//* Import locales
// import blockContent from './locale/BlockContent'
import localeString from './locale/string'
import localeText from './locale/text'
import LocaleBlockContent from './locale/blockContent'
// import localeBlockContent from './locale/BlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   
    //* content schemas
    site,
    privacyPolicy,
    pagePromotions,
    promotion,
    pageAbout,
    pageContact,
    pageHero,
    pageSolution,
    solution,

    // types schemas
    pageMeta,
    blockContent,

    // components schemas
    card,
    button,
    definition,

    // locales schemas
    localeText,
    localeString,
    LocaleBlockContent,
  ])
})
