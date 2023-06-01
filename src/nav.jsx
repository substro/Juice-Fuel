import { FaTimes, FaBars } from "react-icons/fa"
import { useState } from "react"
import React from "react"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      <ul className={` primary-nav ${isOpen ? "active" : "none"}`}>
        <li>
          <a href="" className="whatsapp">
            Whatsapp
          </a>
        </li>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">TikTok</a>
        </li>
        <li>
          <a href="">Location</a>
        </li>
      </ul>

      <button onClick={() => setIsOpen((prev) => !prev)} className="nav-btn">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}

// export default Nav
