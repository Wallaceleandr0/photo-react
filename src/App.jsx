import './App.css'
import Menu from "./Components/Header/Menu"
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  console.log("Olá")

  return (
    <>
    <Router>
      <Menu/>
      </Router>
    </>
    )
}

export default App
