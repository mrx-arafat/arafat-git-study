import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LessonPage from './pages/LessonPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:slug" element={<LessonPage />} />
      </Routes>
    </Router>
  )
}

export default App
