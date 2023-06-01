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
import Content from "./content.json"

export const NavBar = () => {
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
            <a
              href={Content.contacts.whatsapp}
              target="_blank"
              className="whatsapp"
            >
              <div className="wa-icon">
                <FaWhatsapp />
              </div>
              <span className="wa-text">+961 81 974 945</span>
            </a>
          </li>
          <li>
            <a href={Content.contacts.facebook} target="_blank">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href={Content.contacts.instagram} target="_blank">
              {" "}
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href={Content.contacts.tiktok} target="_blank">
              <FaTiktok /> TikTok
            </a>
          </li>
          <li>
            <a href={Content.contacts.location} target="_blank">
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

// export default NavBar
