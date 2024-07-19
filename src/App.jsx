import Header from './assets/components/Header'
import './css/Style.css'
import Footer from './assets/components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './assets/components/Inicio'
import Contacto from './assets/components/Contacto'
import NotFound from './assets/components/NotFound'
import Proyectos from './assets/components/Proyectos'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/proyectos' element={<Proyectos/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
