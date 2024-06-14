import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home.page/HomePage'
import AboutPage from './pages/about.page/AboutPage'
import ConatctPage from './pages/contact.page/ContactPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ConatctPage />} />
      </Routes>
    </>
  )
}

export default App
