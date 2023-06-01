import {
  FaTimes,
  FaBars,
  FaFacebook,
  FaMapMarkerAlt,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"
import { useState } from "react"
import React from "react"
import Content from "./content.json"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        data-visible={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-btn "
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav>
        <ul className={` primary-nav `} data-visible={isOpen}>
          <li>
            <a href={Content.contacts.whatsapp} className="whatsapp">
              <div className="wa-icon">
                <FaWhatsapp />
              </div>
              <span className="wa-text">+961 81 974 945</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="">
              <FaTiktok /> TikTok
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <FaMapMarkerAlt />
              Location
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
