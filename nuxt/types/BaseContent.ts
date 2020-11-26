import { ColumnSettings } from '~/dev/databaseQuery'

type LiteralUnion<T extends U, U = string> = T | (U & never)

interface LinkDef {
  _key: string
  _type: 'link'
  href: string
}

interface RouteDef {
  _key: string
  _type: 'route'
  to: string
}

export type MarkDef = LinkDef | RouteDef

export type Mark = 'strong' | 'em'
interface Span {
  _key: string
  _type: 'span'
  text: string
  marks: (Mark | string)[]
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

interface BlockLink {
  _key: string
  _type: 'link'
  text: string
  href: string
  goal?: string
}

interface BlockDefinition {
  _key: string
  _type: 'definition'
}

interface BlockPageSettings extends ColumnSettings {
  _key: string
  _type: 'column'
}

export type ContentText = (
  | Block
  | BlockListItem
  | BlockLink
  | BlockDefinition
)[]
export type Content = (Block | BlockListItem | BlockPageSettings | BlockLink)[]

export interface ContentColumn extends ColumnSettings {
  content: ContentText
}
