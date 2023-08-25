// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/landing/Home"
import Introduction from "./pages/Introduction"

function App() {
  return (
    <main className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/intro" element={<Introduction />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
