export type Topic = {
    slug: string
    label: string
}

export const TOPICS: Topic [] = [
    { slug: 'Coding', label: 'Coding' },
    { slug: 'ai-and-technology', label: 'AI & Technology' },
    { slug: 'book insights', label: 'Book Insights' },
    { slug: 'journal', label: 'Journal' },
    { slug: 'Learning', label: "Learning" },
    { slug: 'Productivity', label: 'Productivity' },
    { slug: 'self-improvement', label: 'Self-improvement' },   
]

export function getTopicBySlug(slug: string): Topic | undefined {
    return TOPICS
    .find((topic) => topic.slug === slug)
}