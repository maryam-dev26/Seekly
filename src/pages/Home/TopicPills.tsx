import { TOPICS } from "../../data/topics";
import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

function TopicPills () {
    return (
    <section className="pb-12 md:pb-20">
            <Container>
                <p className="mb-4 text-sm text-ink-muted">
                    Or start with a topic
                </p>
                <ul className="flex flex-wrap gap-3" aria-label="Browse by topic">
                    {TOPICS.map((topic) => (
                        <li key={topic.slug}>
                            <Link 
                                to={`/topics/${topic.slug}`}
                                className="inline-block rounded-full border border-transparent bg-sage px-4 py-2 text-sm font-medium
                                text-brand transition-colors hover:bg-brand hover:text-white"
                                >                              
                                {topic.label}                         
                            </Link>                       
                        </li>
                    ))}

                    <li>
                        <Link 
                        to={"/topics"}
                        className="inline-block rounded-full border border-line  px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                        >
                        All Topics →
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default TopicPills
        