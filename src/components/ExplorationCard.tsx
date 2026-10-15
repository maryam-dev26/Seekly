import { Link } from "react-router-dom";
import { getAuthorByUsername } from "../data/authors";
import { getTopicBySlug } from "../data/topics";
import type { Exploration } from "../data/types";


type ExplorationCardProps = {
    exploration: Exploration
}

const dateFormatter = new Intl.DateTimeFormat('en-US',{
    dateStyle: 'medium',
    timeZone: 'UTC',
})

function ExplorationCard ({exploration}: ExplorationCardProps) {
    const { slug, title, excerpt, topic, author, publishedAt, readingTime, coverImage } =
    exploration

    const topicLabel = getTopicBySlug(topic)?.label ?? topic
    const authorName = getAuthorByUsername(author)?.name ?? author

    return (
        <article 
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line
                      bg-surface transition-colors hover:border-brand has-focus-visible:outline-2 
                      has-focus-visible:outline-offset-2 has-focus-visible:outline-brand">
                        
            {coverImage ? (
                <img
                src={coverImage.src}
                alt={coverImage.alt}
                loading="lazy"
                className="aspect-video w-full object-cover"
                />
            ): (
                <div 
                    aria-hidden="true" 
                    className="aspect-video w-full bg-sage" 
                />
            )}
            <div className="flex flex-1 flex-col p-6">
                <p 
                  className="text-xs font-medium uppercase tracking-widest text-brand">
                  {topicLabel}
                </p>

                <h3 className="mt-3 text-2xl leading-snug text-ink">
                    <Link 
                        to={`/explore/${slug}`}
                    className="transition-colors group-hover:text-brand after:absolute 
                               after:inset-0 focus-visible:outline-none"
                    >
                        {title}
                    </Link>
                </h3>

                <p 
                  className="mt-3 line-clamp-3 text-ink-muted">
                    {excerpt}
                </p>

                 <p className="mt-auto pt-4 text-sm text-ink-muted">
                    <span>
                        {authorName}
                    </span>
                    <span aria-hidden="true"> · </span>
                    <time dateTime={publishedAt}>
                    {dateFormatter.format(new Date(publishedAt))}
                    </time>
                    <span aria-hidden="true"> · </span>
                    <span>{readingTime} min read</span>
                </p>
            </div>
        </article>
    )
}

export default ExplorationCard