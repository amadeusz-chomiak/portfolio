import S from '@sanity/desk-tool/structure-builder';
import { SchemaTypesPages } from '../schemas/utils/typedSchema';
import { GrDocument } from 'react-icons/gr'

export const showPage = (name: SchemaTypesPages, title: string) =>
  S.listItem()
    .title(title)
    .icon(GrDocument)
    .child(S.editor().schemaType(name).documentId(name));
