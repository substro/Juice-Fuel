import "./CSS/index.css"
import menuData from "./menu.json"
import Nav from "./nav"
import { useState, useEffect } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <header className="header">
        <a href="./index.html">
          <img src="./src/assets/images/logo.png" alt="logo" className="logo" />
        </a>
        <button
          onClick={toggleMenu}
          className={`menu-toggle ${isOpen ? "open" : ""}`}
        >
          {isOpen ? (
            <img src="./src/assets/images/menu-close.svg" alt="menu" />
          ) : (
            <img src="./src/assets/images/menu-open.svg" alt="menu" />
          )}
        </button>
        {isOpen && <Nav />}
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </>
  )
}

export default App
