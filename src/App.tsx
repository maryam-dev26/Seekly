import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

function Home() {
  return <h1>Home</h1>
}

function Explore() {
  return <h1>Explore</h1>
}

function Topics() {
  return <h1>Topics</h1>
}

function Topic() {
  return <h1>Topic</h1>
}

function Exploration() {
  return <h1>Exploration</h1>
}

function Search() {
  return <h1>Search</h1>
}

function Person() {
  return <h1>Person</h1>
}

function About() {
  return <h1>About</h1>
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
