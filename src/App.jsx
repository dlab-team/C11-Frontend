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
import Introduction from "./pages/application-form/Introduction";
import PersonalInfoForm from "./pages/application-form/PersonalInfoForm";
import InformacionProfesionalForm from "./pages/application-form/InformacionProfesionalForm.jsx";
import MultistepForm from "./components/MultistepForm";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <main className="app">

      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restorePass" element={<RestorePass />} />
          <Route exact path="/recoverPass" element={<RecoverPass />} />
          <Route exact path="/" element={<FloatingButton />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/intro" element={<Introduction />} />
          <Route exact path="/form" element={<MultistepForm />} />
          <Route exact path="/profesional-info" element={<InformacionProfesionalForm />} />
          <Route exact path="/personal-info" element={<PersonalInfoForm />} />
          <Route exact path="/intro" element={<Introduction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;