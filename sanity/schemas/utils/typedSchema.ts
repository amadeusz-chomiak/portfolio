type SchemaTypesBasic = 'string' | 'text' | 'boolean' | 'number';
type SchemaTypesWithFields = 'object' | 'image' | 'document';
type SchemaTypesComponents = 'Card' | 'Button';
type SchemaTypesLocale = 'localeString' | 'localeText';
type SchemaTypes =
  | SchemaTypesBasic
  | SchemaTypesLocale
  | SchemaTypesWithFields
  | SchemaTypesComponents;

type Validation = 'error' | 'warn' | 'no';

interface Preview {
  select: {
    title?: string;
    subtitle?: string;
    media?: string;
  };
}
interface Schema {
  name: string;
  type: SchemaTypes;
  description?: string;
  title?: string;
  options?: object;
  required?: Validation;
  fields?: Schema[];
  preview?: Preview;
}

type Rule = { required: () => any };
const createSchema = (schema: Schema) => {
  const fields = schema.fields;
  if (fields)
    fields.forEach((field) => {
      if (field === undefined)
        throw new Error(
          `Undefined field! name: ${schema.name} type: ${schema.type} description: ${schema.description} fields: ${field.name}`
        );
    });
  if (schema === undefined)
    throw new Error(
      `Undefined schema! name: ${schema.name} type: ${schema.type} description: ${schema.description} fields: ${field.name}`
    );
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
        },
      }),
    ],
    ...schema,
  });

type Collapsed = 'disallow' | 'allow' | 'collapse';
interface SchemaObject {
  name: string;
  fields?: Schema[];
  description?: string;
  title?: string;
  type?: SchemaTypesWithFields | SchemaTypesComponents;
  required?: Validation;
  collapsed?: Collapsed;
  preview?: Preview;
}

export const createObject = (schema: SchemaObject) => {
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
