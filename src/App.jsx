import { React } from 'react';
import HeroSection from './components/Landing/HeroSection.jsx';
import HeroSectionDos from './components/Landing/HeroSectionDos.jsx';
import InformacionProfesionalForm from './pages/application-form/InformacionProfesionalForm.jsx';
import PerfilLaboralForm from './pages/application-form/perfilLaboralForm.jsx';


function App() {
  return (
    <>
    {/* <HeroSection
    titulo='¿Buscas talento TI?'
    resumen='Te encontramos profesionales en 5 días y los acompañamos por 3 meses con  tutores senior para potenciar y acelerar sus habilidades técnicas.'/>
    {/* <HeroSection
    titulo='¿Buscas Trabajo TI'
    resumen='Te contactamos con empresas de chile y el extranjero que buscan profesionales TI.'
    // /> */} 
   <InformacionProfesionalForm/>
    {/* <PerfilLaboralForm/> */}
    </>
  )
}

export default App
