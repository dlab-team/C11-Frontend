// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Login from "./pages/access/Login"
import Landing from "./pages/Landing"
import Register from "./pages/access/Register"
import Footer from "./components/Footer"


function App() {
  return (
    <main className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path='/register' element={ <Register /> } />
          <Route exact path='/login' element={ <Login /> } />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App;
