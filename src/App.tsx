import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/layout/Layout'
import Container from './components/layout/Container'

function Explore() {
  return (
    <Container>
      <h1>Explore</h1>
    </Container>
  )
}

function Topics() {
  return (
    <Container>
      <h1>Topics</h1>
    </Container>
  )
}

function Topic() {
  return (
    <Container>
      <h1>Topic</h1>
    </Container>
  )
}

function Exploration() {
  return (
    <Container>
      <h1>Exploration</h1>
    </Container>
  )
}

function Search() {
  return (
    <Container>
      <h1>Search</h1>
    </Container>
    )
  }

function Person() {
  return (
    <Container>
      <h1>Person</h1>
    </Container>
  )
}

function About() {
  return (
    <Container>
      <h1>About</h1>
    </Container>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<Topic />} />
        <Route path="/explore/:slug" element={<Exploration />} />
        <Route path="/search" element={<Search />} />
        <Route path="/people/:username" element={<Person />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
