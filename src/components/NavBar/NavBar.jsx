import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar({ logo, inicio, productos, nosotros, contacto }) {
  return (
    <>
      <header id="header-constructor">
        <nav>
          <div id="Logo">
            <h3>
              <Link to="/">{logo}</Link>
            </h3>
          </div>
        </nav>

        <header>
          <div id="nav-constructor">
            <nav>
              <div className="secciones">
                <ul>
                  <li>
                    <NavLink to="/">{inicio}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/productos">{productos}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/nosotros">{nosotros}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacto">{contacto}</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </header>
    </>
  );
}

export default NavBar;
