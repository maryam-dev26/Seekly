import type { Exploration } from './types'


export const EXPLORATIONS: Exploration[] = [
  {
    slug: 'the-art-of-slowing-down',
    title: 'The Art of Slowing Down',
    excerpt: 'In a world that rewards speed, what do we lose when we never pause?',
    topic: 'self-improvement',
    tags: ['Reflection', 'Attention'],
    author: 'maryam',
    publishedAt: '2026-10-12',
    readingTime: 3,
    status: 'published',
    sections: [
      {
        kind: 'question',
        paragraphs: [
          'I noticed that I rush through even the things I enjoy. Why does being fast feel like being productive?',
        ],
      },
      {
        kind: 'reflection',
        paragraphs: [
          'Slowing down is not the same as doing less. For me it is about noticing what I am doing while I do it.',
          'I want to try one slow task each day, with no phone nearby, and see what changes.',
        ],
      },
    ],
    sources: [],
  },
  {
    slug: 'why-small-habits-compound',
    title: 'Why Small Habits Compound',
    excerpt: 'Big resolutions fade quickly, yet tiny routines seem to stay. Why?',
    topic: 'productivity',
    tags: ['Habits', 'Consistency'],
    author: 'maryam',
    publishedAt: '2026-10-10',
    readingTime: 4,
    status: 'published',
    sections: [
      {
        kind: 'question',
        paragraphs: ['Why do my big plans collapse in a week while tiny routines survive for months?'],
      },
      {
        kind: 'findings',
        paragraphs: [
          'In Atomic Habits, James Clear argues that small changes, repeated every day, add up to large results over time.',
        ],
      },
      {
        kind: 'reflection',
        paragraphs: [
          'I want to test this with one tiny habit for a month, instead of changing everything at once.',
        ],
      },
    ],
    sources: [{ title: 'Atomic Habits', author: 'James Clear' }],
  },
  {
    slug: 'learning-by-retrieval',
    title: 'Does Rereading Really Help?',
    excerpt: 'I reread my notes before every exam. Here is what I found about better ways to study.',
    topic: 'learning',
    tags: ['Memory', 'Study methods'],
    author: 'maryam',
    publishedAt: '2026-10-08',
    readingTime: 5,
    status: 'published',
    sections: [
      {
        kind: 'question',
        paragraphs: ['Does rereading my notes actually help me remember them?'],
      },
      {
        kind: 'findings',
        paragraphs: [
          'Make It Stick summarizes research suggesting that testing yourself, and spreading practice over time, usually works better for long-term memory than rereading.',
        ],
      },
      {
        kind: 'reflection',
        paragraphs: [
          'From now on I will turn my notes into questions and quiz myself, instead of just reading them again.',
        ],
      },
    ],
    sources: [
      {
        title: 'Make It Stick: The Science of Successful Learning',
        author: 'Peter C. Brown, Henry L. Roediger III, Mark A. McDaniel',
      },
    ],
  },
  {
    slug: 'what-is-a-language-model',
    title: 'What Happens When I Chat with an AI?',
    excerpt: 'A high-level look at how modern language models work, without the math.',
    topic: 'ai-and-technology',
    tags: ['AI', 'Language models'],
    author: 'maryam',
    publishedAt: '2026-10-06',
    readingTime: 6,
    status: 'published',
    sections: [
      {
        kind: 'question',
        paragraphs: ['When I chat with an AI, what is actually happening under the hood?'],
      },
      {
        kind: 'exploration',
        paragraphs: ['I wanted to understand it at a high level first, without getting lost in the math.'],
      },
      {
        kind: 'findings',
        paragraphs: [
          'Most modern language models are built on the transformer architecture, introduced in the 2017 paper "Attention Is All You Need".',
        ],
      },
      {
        kind: 'reflection',
        paragraphs: ['I still treat AI answers as a starting point to check, not a final answer.'],
      },
    ],
    sources: [
      {
        title: 'Attention Is All You Need',
        author: 'Ashish Vaswani et al.',
        url: 'https://arxiv.org/abs/1706.03762',
      },
    ],
  },
  {
    slug: 'react-state-as-memory',
    title: "React State: A Component's Memory",
    excerpt: 'How a component remembers things between renders, and how a menu toggle made it click.',
    topic: 'coding',
    tags: ['React', 'State'],
    author: 'maryam',
    publishedAt: '2026-10-05',
    readingTime: 4,
    status: 'published',
    sections: [
      {
        kind: 'question',
        paragraphs: ['How does a React component remember anything between renders?'],
      },
      {
        kind: 'exploration',
        paragraphs: [
          'I think of state as the component\'s memory. Calling the setter changes that memory and asks React to draw the component again.',
        ],
      },
      {
        kind: 'findings',
        paragraphs: [
          'The React documentation describes state as a component\'s memory, kept by React between renders.',
        ],
      },
      {
        kind: 'reflection',
        paragraphs: [
          'Building the mobile menu toggle made this click: one true/false value controls what appears on screen.',
        ],
      },
    ],
    sources: [
      {
        title: "State: A Component's Memory",
        author: 'React Docs',
        url: 'https://react.dev/learn/state-a-components-memory',
      },
    ],
  },
  {
    slug: 'journaling-as-thinking',
    title: 'Journaling as a Way of Thinking',
    excerpt: 'Writing a thought down seems to change it. Here is what I notice.',
    topic: 'journal',
    tags: ['Journaling', 'Reflection'],
    author: 'maryam',
    publishedAt: '2026-10-13',
    readingTime: 2,
    status: 'draft',
    sections: [
      {
        kind: 'question',
        paragraphs: ['Why does a thought feel clearer once I write it down?'],
      },
      {
        kind: 'reflection',
        paragraphs: ['This one is still a draft, and I am still figuring out what I think.'],
      },
    ],
    sources: [],
  },
]

export function getPublishedExplorations (): Exploration[] {
  return EXPLORATIONS
  .filter((item)=> item.status === 'published')
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getExplorationBySlug (
  slug: string
): Exploration | undefined {
  return getPublishedExplorations().find(
    (item) => item.slug === slug)
}

export function getExplorationsByTopic (
  topicSlug: string
) : Exploration[] {
  return getPublishedExplorations().filter((item) => item.topic === topicSlug)
}