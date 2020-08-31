import S from '@sanity/desk-tool/structure-builder';
import { SchemaTypesPages } from '../schemas/utils/typedSchema';
import { GrDocument } from 'react-icons/gr'
import { IconType } from 'react-icons/lib';

export const showPage = (name: SchemaTypesPages, title: string, icon: IconType = GrDocument) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.editor().title(title).schemaType(name).documentId(name));
