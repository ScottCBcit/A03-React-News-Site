import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Index } from './pages/Index'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import './App.css'

function App() {

  return (
    <div className="App">
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
