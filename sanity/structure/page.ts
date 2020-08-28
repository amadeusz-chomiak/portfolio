import S from '@sanity/desk-tool/structure-builder';
import { SchemaTypesPages } from '../schemas/utils/typedSchema';

export const showPage = (name: SchemaTypesPages, title: string) =>
  S.listItem()
    .title(title)
    .child(S.editor().schemaType(name).documentId(name));
