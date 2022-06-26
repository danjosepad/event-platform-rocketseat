export interface Lesson {
  id: string
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}