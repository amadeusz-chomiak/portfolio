import supportedLanguages from './supportedLanguages'

export default {
  name: 'LocaleBlockContentBasic',
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
    type: 'BlockContentBasic',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
