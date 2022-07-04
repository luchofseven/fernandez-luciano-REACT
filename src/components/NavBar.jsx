import { useRef } from "react";
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"

export default function NavBar() {

  //Solución del NavBar Bootstrap facilitada por un compañero de la cursada.
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-alpha-color-one">
      <div className="container-fluid">
        <Link onClick={collapseNav} className="navbar-brand" to="/">
          <img src="/images/favicon.png" className="mi-estilo-logo" alt="floora logo" height="65px" width="65px" />
        </Link>
        <button ref={navButton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mi-estilo-nav">
            <li className="nav-item">
              <Link onClick={collapseNav} className="nav-link" to="/cart"><CartWidget /></Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} className="nav-link" to="/">INICIO</Link>
            </li>
            <li className="nav-item mi-estilo-link">
              <Link onClick={collapseNav} className="nav-link" to="/aboutus">NOSOTROS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}