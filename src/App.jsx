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

function App() {
  return (
    <main className="app">
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
