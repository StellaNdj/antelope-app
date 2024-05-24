import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-title">
        <h2>Antelopes</h2>
      </div>
      <div className="nav-btns">
        <h3>Navigation</h3>
        <button className={window.location.pathname === "/charts" ? "active" : ""}><NavLink to='/charts'>Charts</NavLink></button>
        <button className={window.location.pathname === "/table" ? "active" : ""}><NavLink to='/table'>Table</NavLink></button>
      </div>
    </nav>
  )
}

export default Navbar;
