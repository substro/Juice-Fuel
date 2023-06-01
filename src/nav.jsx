import { FaTimes, FaBars } from "react-icons/fa"
import { useState } from "react"
import React from "react"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        data-visible={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-btn"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav>
        <ul className={` primary-nav`} data-visible={isOpen}>
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
      </nav>
    </>
  )
}

// export default Nav
