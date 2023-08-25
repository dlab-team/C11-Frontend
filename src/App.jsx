// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/landing/Home"
import Register from "./pages/access/Register"
import Footer from "./components/Footer"


function App() {
  return (
    <main className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/register' element={ <Register /> } />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
