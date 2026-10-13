export type SectionKind = 'question' | 'exploration' | 'findings' | 'reflection'

export type ContentSection = {
  kind: SectionKind
  heading?: string
  paragraphs: string[]
}

export type Source = {
  title: string
  author?: string
  url?: string
}

export type CoverImage = {
  src: string
  alt: string
}

export type ExplorationStatus = 'draft' | 'published'

export type Exploration = {
  slug: string
  title: string
  excerpt: string
  topic: string
  tags: string[]
  author: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  status: ExplorationStatus
  coverImage?: CoverImage
  sections: ContentSection[]
  sources: Source[]
}

export type Author = {
  username: string
  name: string
}