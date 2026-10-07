import { Link } from 'react-router-dom'
import Container from '../../components/layout/Container'

function Hero() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="text-xs font-medium uppercase tracking-widest text-brand">
          Explore · Learn · Share
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-ink md:text-6xl">
          What are you curious about?
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-muted">
          Discover interesting ideas, explore what you want to understand, and
          share what you learn.
        </p>

        <Link
          to="/explore"
          className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Explore
        </Link>
      </Container>
    </section>
  )
}

export default Hero