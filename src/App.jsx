import './App.css'
import Menu from "./Components/Header/Menu"
import { BrowserRouter as Router } from 'react-router-dom'
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);

  return (
    <>
    <Router>
      <Menu/>
      </Router>
    </>
    )
}

export default App
