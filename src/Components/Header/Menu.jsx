import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Contact from '../../Pages/Contact/Contact'
import About from '../../Pages/About/About'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default Header