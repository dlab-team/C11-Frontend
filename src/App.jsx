// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/landing/Home"
import FloatingButton from "./components/FloatingButton"

import { React } from 'react';
import MainBuscasTalento from './components/Landing/MainBuscasTalento.jsx';
import MainBuscasTrabajo from './components/Landing/MainBuscasTrabajo.jsx';


function App() {
  return (
    <main className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/" element={<FloatingButton />}/>
          <MainBuscasTalento
    titulo='¿Buscas talento TI?'
    resumen='Te encontramos profesionales en 5 días y los acompañamos por 3 meses con  tutores senior para potenciar y acelerar sus habilidades técnicas.'
    />
        </Routes>
      </Router>
    </main>
  )
}

export default App
