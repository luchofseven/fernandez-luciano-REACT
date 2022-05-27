import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-alpha-color-one">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/img/favicon.png"
            alt="floora logo"
            height="50px"
            width="50px"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mi-estilo-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">INICIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PRODUCTOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PROMOCIONES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">NOSOTROS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
