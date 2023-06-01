import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src="/dist/assets/logo-2a025ab4.png" alt="logo" className="logo" />
      </a>

      <NavBar />
    </header>
  )
}
