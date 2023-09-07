// import { useState } from 'react'
import FloatingButton from "./components/FloatingButton";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Login from "./pages/Login"
import Home from "./pages/landing/Home"
import Register from "./pages/access/Register"
import Footer from "./components/Footer"
import Social_login from "./components/Social_login";
import Introduction from "./pages/application-form/Introduction";


function App() {

  return (
    <main className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<FloatingButton />} />
          <Route exact path='/login' element={ <Login /> } />
          <Route exact path='/register' element={ <Register /> } />
          <Route exact path='/social_login' element={ <Social_login /> } />
          <Route exact path="/intro" element={<Introduction />} />



        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
