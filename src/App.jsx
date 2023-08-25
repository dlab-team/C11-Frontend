import { React } from 'react';
import MainBuscasTalento from './components/Landing/MainBuscasTalento.jsx';
import MainBuscasTrabajo from './components/Landing/MainBuscasTrabajo.jsx';


function App() {
  return (
    <>
    <MainBuscasTalento
    titulo='¿Buscas talento TI?'
    resumen='Te encontramos profesionales en 5 días y los acompañamos por 3 meses con  tutores senior para potenciar y acelerar sus habilidades técnicas.'
    />
    {/* <MainBuscasTrabajo
    titulo='¿Buscas Trabajo TI'
    resumen='Te contactamos con empresas de chile y el extranjero que buscan profesionales TI.'
    /> */}
    </>
  )
}

export default App
