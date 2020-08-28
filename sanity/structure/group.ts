import S from '@sanity/desk-tool/structure-builder';
import { SchemaTypesGroups } from '../schemas/utils/typedSchema';
import { GrFolder } from 'react-icons/gr'

export const showGroup = (name: SchemaTypesGroups, title: string) =>
  S.listItem().title(title).icon(GrFolder).child(S.documentTypeList(name).title(title));
