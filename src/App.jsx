// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Login from "./pages/Login"
import Home from "./pages/landing/Home"
import RestorePass from "./pages/RestorePass"
import RecoverPass from "./components/RecoverPass"
import Register from "./pages/access/Register"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restorePass" element={<RestorePass />} />
          <Route exact path="/recoverPass" element={<RecoverPass />} />
          <Route exact path='/register' element={ <Register /> } />
          <Route exact path='/login' element={ <Login /> } />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App;
