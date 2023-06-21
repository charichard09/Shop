import { NavLink } from "react-router-dom";

export default function Header() {

  return (
  <div>
<header>
  <NavLink to="/" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "black"} : { textDecoration: "none", "paddingRight": "1em", color: "black" } }>
          Home
  </NavLink>
  <NavLink to="/about" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "black"} : { textDecoration: "none", "paddingRight": "1em", color: "black" }}>
    About
  </NavLink>
</header>
</div>
  );
}