import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src="src/logo.png" alt="logo" className="logo" />
      </a>

      <NavBar />
    </header>
  )
}
