import { NavLink } from "react-router-dom";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="navigation">
      <div className="navigation__top">
        <div className="navigation__top-wrapper">
          <div className="navigation__contacts">
            <span className="navigation__contact">
              <IoIosPaperPlane aria-label="Email icon" /> 4000@dinmaegler.com
            </span>
            <span className="navigation__contact">
              <FaPhoneAlt aria-label="Phone icon" /> +45 7070 4000
            </span>
          </div>
          <span className="navigation__login">
            <IoPerson aria-label="User login" />
            <NavLink to="/login" className="navigation__login-link">
              Log ind
            </NavLink>
          </span>
        </div>
      </div>

      <nav className="navigation__main">
        <div className="navigation__main-wrapper">
          <NavLink to="/" className="navigation__logo">
            <img src="./logo.png" alt="Din Mægler logo" />
          </NavLink>
          <ul className="navigation__links">
            <li className="navigation__link-item">
              <NavLink to="/boliger">Boliger til salg</NavLink>
            </li>
            <li className="navigation__link-item">
              <NavLink to="/maeglere">Mæglere</NavLink>
            </li>
            <li className="navigation__link-item">
              <NavLink to="/favoritter">Mine favoritter</NavLink>
            </li>
            <li className="navigation__link-item">
              <NavLink to="/kontakt-os  ">Kontakt os</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
