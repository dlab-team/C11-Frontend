// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/landing/Home";
import Register from "./pages/access/Register";
import Footer from "./components/Footer";
import Introduction from "./pages/application-form/Introduction";
import PersonalInfoForm from "./pages/application-form/PersonalInfoForm";
import { React } from 'react';
import HeroSection from './components/Landing/HeroSection.jsx';
import HeroSectionDos from './components/Landing/HeroSectionDos.jsx';
import InformacionProfesionalForm from './pages/application-form/InformacionProfesionalForm.jsx';


function App() {
  return (
    
    <main className="app">
    <HeroSection
    titulo='¿Buscas talento TI?'
    resumen='Te encontramos profesionales en 5 días y los acompañamos por 3 meses con  tutores senior para potenciar y acelerar sus habilidades técnicas.'/>
    {/* <HeroSection
    titulo='¿Buscas Trabajo TI'
    resumen='Te contactamos con empresas de chile y el extranjero que buscan profesionales TI.'
    /> */}
    {/* <InformacionProfesionalForm/> */}
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/intro" element={<Introduction />} />
          <Route exact path="/personal-info" element={<PersonalInfoForm />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
