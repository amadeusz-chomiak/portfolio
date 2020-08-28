type SchemaTypesBasic = 'string' | 'text' | 'boolean' | 'number';
type SchemaSpecial = 'reference' | 'array';
type SchemaTypesWithFields = 'object' | 'image' | 'document';
type SchemaTypesComponents = 'Card' | 'Button' | 'Definition';
type SchemaTypesDocuments = 'PageExample' | 'PagePromotions' | 'Promotion' | 'Solution';
type SchemaTypesPlugins = 'color';
type SchemaTypesCustom = 'Meta';
type SchemaTypesLocale =
  | 'LocaleString'
  | 'LocaleText'
  | 'LocaleBlockContentComplex'
  | 'LocaleBlockContentBasic';
type SchemaTypes =
  | SchemaTypesBasic
  | SchemaTypesLocale
  | SchemaTypesWithFields
  | SchemaTypesComponents
  | SchemaTypesPlugins
  | SchemaSpecial
  | SchemaTypesCustom;

type Validation = 'error' | 'warn' | 'no';

interface PreviewSelect {
  title?: string;
  subtitle?: string;
  media?: string | JSX.Element;
}

interface PreviewSelectAny extends PreviewSelect {
  [key: string]: string | JSX.Element
}

type PreviewSelectData<T extends PreviewSelectAny> = {
  [Key in keyof T]: any
}

interface Preview<T extends PreviewSelectAny = PreviewSelectAny> {
  select: T;
  prepare?: (
    data: PreviewSelectData<T>
  ) => PreviewSelect;
}

interface SchemaType {
  type: SchemaTypes | SchemaTypesDocuments;
}

export interface Schema {
  name: string;
  type: SchemaTypes;
  description?: string;
  title?: string;
  options?: object;
  required?: Validation;
  fields?: Schema[];
  preview?: Preview;
  weak?: Boolean;
  to?: SchemaType[];
  of?: SchemaType[];
}

type Rule = { required: () => any };
const createSchema = (schema: Schema) => {
  const title = schema.title ?? schema.name;
  const validation = (Rule: Rule) =>
    schema.required === 'error'
      ? Rule.required().error(`${title} is required`)
      : schema.required === 'warn'
      ? Rule.required().warning(
          `${title} should be set, but won't break the website`
        )
      : [];

  return {
    title,
    name: schema.name,
    description: schema.description ?? '',
    type: schema.type,
    options: schema.options ?? {},
    fields: schema.fields ?? undefined,
    validation,
    weak: schema.weak,
    to: schema.to,
    of: schema.of,
    preview: schema.preview,
  };
};

export const create = createSchema;

interface SchemaImage {
  name: string;
  description?: string;
  title?: string;
  required?: Validation;
  hotspot?: true;
}

export const createImage = (schema: SchemaImage) =>
  createSchema({
    type: 'image',
    options: {
      storeOriginalFilename: false,
      hotspot: !!schema.hotspot,
    },
    fields: [
      createSchema({
        name: 'Alt',
        title: 'Alternate text',
        description:
          'Describe what is on the image for people with vision problems',
        type: 'LocaleText',
        required: 'warn',
        options: {
          isHighlighted: true,
        },
      }),
    ],
    ...schema,
  });

type Collapsed = 'disallow' | 'allow' | 'collapse';
interface SchemaObject {
  name: string;
  fields: Schema[];
  description?: string;
  title?: string;
  type?: SchemaTypesWithFields;
  required?: Validation;
  collapsed?: Collapsed;
  preview?: Preview;
}

interface SchemaComponent {
  name: string;
  description?: string;
  title?: string;
  type: SchemaTypesComponents | SchemaTypesLocale | SchemaTypesCustom;
  required?: Validation;
  collapsed?: Collapsed;
  preview?: Preview;
}

export const createObject = (schema: SchemaObject | SchemaComponent) => {
  const collapsed = schema.collapsed ?? 'collapse';

  return createSchema({
    type: schema.type ?? 'object',
    options: {
      collapsible: collapsed === 'collapse' || collapsed === 'allow',
      collapsed: collapsed === 'collapse',
    },
    ...schema,
  });
};

interface SchemaArray {
  name: string;
  of: SchemaType[];
  description?: string;
  title?: string;
  required?: Validation;
}

export const createArray = (schema: SchemaArray) => {
  return createSchema({
    type: 'array',
    ...schema,
  });
};

interface SchemaReference {
  name: string;
  to: SchemaType[];
  description?: string;
  title?: string;
  required?: Validation;
  week?: true;
}

export const createReference = (schema: SchemaReference) => {
  return createSchema({
    type: 'reference',
    weak: !!schema.week,
    ...schema,
  });
};
