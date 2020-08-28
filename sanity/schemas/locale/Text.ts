import supportedLanguages from './supportedLanguages'

export default {
  name: 'LocaleText',
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
    type: 'text',
    fieldset: lang.isDefault ? null : 'translations',
      rows: 6
  }))
}
