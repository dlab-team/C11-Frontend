import { React } from 'react';
import InformacionProfesionalForm from './pages/application-form/InformacionProfesionalForm.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/landing/Home";
import RestorePass from "./pages/RestorePass"
import RecoverPass from "./components/RecoverPass"
import FloatingButton from "./components/FloatingButton";

import Register from "./pages/access/Register"
import Footer from "./components/Footer"
import WorkingExperience from "./components/forms/WorkingExperience"


import Introduction from "./pages/application-form/Introduction";

import NotFound from "./pages/NotFound"

function App() {
  return (
    <main className="app">
      {/* <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restorePass" element={<RestorePass />} />
          <Route exact path="/recoverPass" element={<RecoverPass />} />
          <Route exact path="/" element={<FloatingButton />} />
          <Route exact path='/register' element={ <Register /> } />
          <Route exact path='/login' element={ <Login /> } />
          <Route
            exact
            path="/workingExperience"
            element={
                <WorkingExperience />
            }
          />

          <Route exact path="/intro" element={<Introduction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router> */}
      
    <InformacionProfesionalForm/> 
    </main>
  );
}

export default App;