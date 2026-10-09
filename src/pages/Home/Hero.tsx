import { Link } from 'react-router-dom'
import Container from '../../components/layout/Container'
import heroIllustration from '../../assets/hero-illustration.webp'

function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:pt-16">
      <div aria-hidden="true"
      className='pointer-events-none absolute right-0 bottom-0 hidden w-[45%] max-w-2xl lg:block'>
        <img
          src={heroIllustration}
          alt=""
          width={1200}
          height={902}
          className="w-full"
        />
          <div className='absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-paper to-transparent' />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-paper to-transparent" />
          <div className='absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-paper to-transparent' />   
      </div>
      <Container>
        <div className="relative lg:max-w-[55%]">
        <p className="text-xs font-medium uppercase tracking-widest text-brand">
          Explore · Learn · Share
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-balance text-ink md:text-6xl">
          What are you curious about?
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-muted">
          Discover interesting ideas, explore what you want to understand, and
          share what you learn.
        </p>

        <Link
          to="/explore"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Explore
        </Link>
        </div>
      </Container>
    </section>
  )
}

export default Hero