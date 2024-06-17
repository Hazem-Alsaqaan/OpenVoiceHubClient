import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home.page/HomePage'
import AboutPage from './pages/about.page/AboutPage'
import ConatctPage from './pages/contact.page/ContactPage'
import Completed from './pages/completed.page/Completed'
import SearchResult from './pages/search.result/SearchResult'
import TasksContainer from './components/tasks.container/TasksContainer'
import NotFound from './pages/not.found.page/NotFound'

function App() {

  return (
    <>
      <Routes>
      <Route path="*" element={<NotFound/>}/>
        <Route  path="/" element={<HomePage />} >
          <Route index element={<TasksContainer/>}/>
          <Route path="home" element={<TasksContainer/>}/>
          <Route path="search" element={<SearchResult/>}/>
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ConatctPage />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  )
}

export default App
