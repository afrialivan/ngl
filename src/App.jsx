import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ngl from './Ngl'

import React from 'react'
import Hasil from './Hasil'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Ngl />} />
        <Route path='/hasil' element={<Hasil />} />
      </Routes>
    </Router>
  )
}

export default App