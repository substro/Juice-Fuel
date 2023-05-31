import "./CSS/index.css"
import menuData from "./menu.json"
import Nav from "./nav"
import react, { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="header">
        <a href="./index.html">
          <img src="./src/assets/images/logo.png" alt="logo" className="logo" />
          <button onClick={toggleMenu} className="menu-toggle">
            Toggle Menu
          </button>
          {isOpen && <Nav />}
        </a>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </>
  )
}

export default App
