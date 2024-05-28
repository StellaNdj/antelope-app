import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faChartSimple } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  return (
    <div>
      {/* Large screen navbar */}
      <nav className="navbar">
        <div className="nav-title">
          <h2>Antelopes Web App</h2>
        </div>
        <div className="nav-btns">
          <h3>Navigation</h3>
          {/* User NavLink isActive to check if the current route is /charts */}
          <NavLink to='/charts' className={({ isActive }) => (isActive ? 'active' : '')}>
            <button>
              <FontAwesomeIcon icon={faChartSimple} />
              <span className="button-text">Charts</span>
            </button>
          </NavLink>
          <NavLink to='/table' className={({ isActive }) => (isActive ? 'active' : '')}>
            <button>
              <FontAwesomeIcon icon={faTable} />
              <span className="button-text">Table</span>
            </button>
          </NavLink>
        </div>
      </nav>

      {/* Smaller navbar for mobile */}
      <nav className="sm-navbar">
      <div className="nav-title">
        <h2>Antelopes</h2>
      </div>
      <div className="nav-btns">
          <NavLink to='/charts' className={({ isActive }) => (isActive ? 'active' : '')}>
            <button>
              <FontAwesomeIcon icon={faChartSimple} />
              <span className="button-text">Charts</span>
            </button>
          </NavLink>
          <NavLink to='/table' className={({ isActive }) => (isActive ? 'active' : '')}>
            <button>
              <FontAwesomeIcon icon={faTable} />
              <span className="button-text">Table</span>
            </button>
          </NavLink>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
