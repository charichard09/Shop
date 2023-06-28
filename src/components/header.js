import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';

export default function Header() {

  return (
  <div>
    <header>
      <div class="nav-bar">
        <div class="logo-container">
          <NavLink to="/">
            <img src={logo}  alt="KewlLogo" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/about" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "black"} : { textDecoration: "none", "paddingRight": "1em", color: "black" }}>
            About
          </NavLink>
          <NavLink to="/mens" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "black"} : { textDecoration: "none", "paddingRight": "1em", color: "black" }}>
            Mens
          </NavLink>
          <NavLink to="/women" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "black"} : { textDecoration: "none", "paddingRight": "1em", color: "black" }}>
            Womens
          </NavLink>
        </div>
      </div>
    </header>
  </div>
  );
}