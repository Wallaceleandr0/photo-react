import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Contact from '../../Pages/Contact/Contact'
import Fotos from '../../Pages/Fotos/Fotos'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/fotos' element={<Fotos/>}/>
    </Routes>
    </>
  )
}

export default Header