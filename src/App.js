import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import AppNavigator from './components/AppNavigator'
import Pokedex from './pages/Pokedex'

function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Pokedex />} />
      </Routes>
    </Router>
  )
}

export default App
