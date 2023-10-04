import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useState, useEffect } from "react"

function Navbar() {

  const [isListVisible, setListVisible] = useState(false)
  const [isButtonVisible, setButtonVisible] = useState(false)

  useEffect(()=> {
    const checkWidth = () => {
      if(window.innerWidth > 820) {
        setListVisible(true)
      } else {
        setListVisible(false)
      }
    }

    const checkWidthButton = () => {
      if(window.innerWidth > 820) {
        setButtonVisible(true)
      } else {
        setButtonVisible(false)
      }
    }

    checkWidthButton()

    checkWidth()

    return () => {
      window.addEventListener('resize', checkWidth)
      window.addEventListener('resize', checkWidthButton)
  }

  }, [])

  const toggleListVisibility = () => {
    setListVisible(!isListVisible)
  } 

  const hiddenUl = () => {
    if(window.innerWidth > 820) {

    } else {
    setListVisible(!isListVisible)
    }
  }



  return (
    <header className='header'>
        <nav>
          <div className='logo-button'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Camera-dynamic-gradient.png" alt="logo" className='logo' />

            <div className='hamburguer' onClick={toggleListVisibility} style={{display: isButtonVisible ? "none" : "block"}}>
                <div className='line-hamburguer'></div>
                <div className='line-hamburguer'></div>
                <div className='line-hamburguer'></div>
            </div>

          </div>
            <ul style={{display: isListVisible ? "flex" : "none"}}>
                <Link onClick={hiddenUl} to="/">Home</Link>
                <Link onClick={hiddenUl} to="/contact">Contato</Link>
                <Link onClick={hiddenUl} to="about">Sobre</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar