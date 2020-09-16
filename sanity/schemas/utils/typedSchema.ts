import { IconType } from "react-icons/lib";

type SchemaTypesBasic = 'string' | 'text' | 'boolean' | 'number';
type SchemaSpecial = 'reference' | 'array';
type SchemaTypesWithFields = 'object' | 'image' | 'document';
type SchemaTypesComponents = 'card' | 'button' | 'definition' | 'column';
export type SchemaTypesPages =
  | 'pageAbout'
  | 'pageContact'
  | 'pageHero'
  | 'pagePromotion'
  | 'pageSolution'
  | 'pagePrivacy'
  | 'site';
export type SchemaTypesGroups = 'promotion' | 'solution';
type SchemaTypesDocuments = SchemaTypesPages | 'promotion' | 'solution';
type SchemaTypesPlugins = 'color';
type SchemaTypesCustom = 'meta';
type SchemaTypesLocale =
  | 'localeString'
  | 'localeText'
  | 'localeBlockContent'
  | 'localeBlockContent';
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
  media?: string | JSX.Element | IconType;
}

interface PreviewSelectAny extends PreviewSelect {
  [key: string]: string | JSX.Element | IconType;
}

type PreviewSelectData<T extends PreviewSelectAny> = {
  [Key in keyof T]: any;
};

interface Preview<T extends PreviewSelectAny = PreviewSelectAny> {
  select: T;
  prepare?: (data: PreviewSelectData<T>) => PreviewSelect;
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

const toCamelCase = <T extends string>(text: T) => text.charAt(0).toLowerCase() + text.slice(1) as T

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
    name: toCamelCase(schema.name),
    description: schema.description ?? '',
    type: toCamelCase(schema.type),
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
        type: 'localeText',
        required: 'warn',
        options: {
          isHighlighted: true,
          collapsible: true,
          collapsed: true,
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
