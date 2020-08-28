import supportedLanguages from './supportedLanguages'

export default {
  name: 'LocaleBlockContentComplex',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true}
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'BlockContentComplex',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
