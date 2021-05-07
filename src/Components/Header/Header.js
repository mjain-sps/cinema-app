import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt, faFilm } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.jpg";
import { useDispatch } from "react-redux";
import { searchMovie, clearSearched } from "../../Actions/movie.actions";
import "./header.css";
function Header({ props }) {
  //Set menu-toggle
  const [menuToggle, setMenuToggle] = useState(false);
  const [searched, setSearched] = useState("");

  //Define redux-constants
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearched(e.target.value);
    dispatch(searchMovie(e.target.value));
  };

  return (
    <React.Fragment>
      <div className="header-wrapper">
        <div className="navbar-band"></div>
        <div className="navbar-items__wrapper">
          <div className="navbar-image">
            <img
              src={logo}
              alt="cinema"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className={menuToggle ? "menu-toggle active" : "menu-toggle"}
            id="menu-toggle"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <p className="bar"></p>
            <p className="bar"></p>
            <p className="bar"></p>
          </div>
          <ul
            className={
              menuToggle ? " navbar-items__ul mobile" : "navbar-items__ul"
            }
          >
            <li className="navbar--items">
              <Link
                to="/"
                className={
                  props && props.location.pathname === "/"
                    ? "active-header"
                    : ""
                }
              >
                Now Playing{" "}
                <span>
                  <FontAwesomeIcon icon={faFilm} />
                </span>{" "}
              </Link>
            </li>
            <li className="navbar--items">
              <Link
                to="/popular"
                className={
                  props && props.location.pathname === "/popular"
                    ? "active-header"
                    : ""
                }
              >
                Popular{" "}
                <span>
                  <FontAwesomeIcon icon={faFireAlt} />
                </span>{" "}
              </Link>
            </li>
            <input
              type="text"
              placeholder="Search"
              className="navbar--items"
              name="search"
              value={searched}
              onChange={handleSearch}
            />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
