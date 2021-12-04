import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/userContext";

const NavBar = (props) => {
  const userContext = useContext(UserContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Molcon
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          {!userContext.user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {userContext.user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {userContext.user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
