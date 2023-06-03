import { NavBar } from "./NavBar"
import logo from "../assets/images/logo.png"
export const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <NavBar />
    </header>
  )
}
