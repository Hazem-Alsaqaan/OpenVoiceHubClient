import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home.page/HomePage'
import AboutPage from './pages/about.page/AboutPage'
import ConatctPage from './pages/contact.page/ContactPage'
import Completed from './pages/completed.page/Completed'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ConatctPage />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  )
}

export default App
