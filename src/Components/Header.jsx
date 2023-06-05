import { NavBar } from "./NavBar";
import logo from "../assets/images/logo.png";
import { Schedule } from "./Schedule";
export const Header = () => {
  return (
    <>
      <Schedule />
      <header className="header">
        <a href="#">
          <img loading="lazy" src={logo} alt="logo" className="logo " />
        </a>

        <NavBar />
      </header>
    </>
  );
};
