import { ColumnSettings } from '~/dev/databaseQuery'

type LiteralUnion<T extends U, U = string> = T | (U & never)

interface LinkDef {
  _key: string
  _type: 'link'
  href: string
}

interface RouteDef {
  _key: string
  _type: 'Route'
  to: string
}

export type MarkDef = LinkDef | RouteDef

export type Mark = LiteralUnion<'strong' | 'em'>
interface Span {
  _key: string
  _type: 'span'
  text: string
  marks: Mark[]
}

export type TextStyles = 'normal' | 'subtitle' | 'title' | 'unimportant'
interface Block {
  _key: string
  _type: 'block'
  children: Span[]
  markDefs: MarkDef[]
  style: TextStyles
}

type ListItemsStyles = 'bullet'

interface BlockListItem extends Block {
  level: number
  listItem: ListItemsStyles
}

interface BlockDefinition {
  _key: string
  _type: 'definition'
  // todo implement
}

interface BlockPageSettings extends ColumnSettings {
  _key: string
  _type: 'column'
}

export type ContentText = (Block | BlockListItem)[]
export type Content = (Block | BlockListItem | BlockPageSettings)[]

export interface ContentColumn extends ColumnSettings {
  content: ContentText
}
