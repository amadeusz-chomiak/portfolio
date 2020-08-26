type SchemaTypesBasic = 'string' | 'text' | 'boolean' | 'number';
type SchemaTypesWithFields = 'object' | 'image' | 'document';
type SchemaTypesLocale = 'localeString' | 'localeText';
type SchemaTypes = SchemaTypesBasic | SchemaTypesLocale | SchemaTypesWithFields;
type Validation = 'error' | 'warn' | 'no'


interface Schema {
  name: string;
  type: SchemaTypes;
  description?: string;
  title?: string;
  options?: object;
  required?: Validation;
  fields?: Schema[];
}
type Rule = { required: () => any }
const createSchema = (schema: Schema) => {
  const title = schema.title ?? schema.name;
  const validation = (Rule: Rule) =>
  schema.required === "error" ? Rule.required().error(`${title} is required`)
      : schema.required === "warn" ? Rule.required().warning(`${title} should be set, but won't break the website`) : []
  
  return {
    title,
    name: schema.name,
    description: schema.description ?? '',
    type: schema.type,
    options: schema.options ?? {},
    fields: schema.fields ?? undefined,
    validation
  }
};

export const create = createSchema;

interface SchemaImage {
  name: string;
  description?: string;
  title?: string;
  required?: Validation;
  hotspot?: true 
}

export const createImage = (schema: SchemaImage) =>
  createSchema({
    type: 'image',
    options: {
      storeOriginalFilename: false,
      hotspot: !!schema.hotspot
    },
    fields: [
      createSchema({
        name: 'Alt',
        title: 'Alternate text',
        description: 'Describe what is on the image for people with vision problems',
        type: 'localeText',
        required: 'warn',
        options: {
          isHighlighted: true
        }
      })
    ],
    ...schema,
  });

  type Collapsed = 'disallow' | 'allow' | 'collapse'
  interface SchemaObject {
    name: string;
    fields: Schema[]
    description?: string;
    title?: string;
    required?: Validation;
    collapsed?: Collapsed;
  }
  
export const createObject = (schema: SchemaObject) => {
    
    const collapsed = schema.collapsed ?? 'collapse'

    createSchema({
      type: 'object',
      options: {
        collapsible: collapsed === 'collapse' || collapsed === 'allow',
        collapsed: collapsed === 'collapse'
      },
      ...schema,
    });
  }
