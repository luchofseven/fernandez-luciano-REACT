import CartWidget from "./CartWidget.jsx"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-alpha-color-one">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">
          <img src="/images/favicon.png" className="mi-estilo-logo" alt="floora logo" height="50px" width="50px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mi-estilo-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/carrito"><CartWidget items={4} /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inicio">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">PRODUCTOS</Link>
            </li>
            <li className="nav-item mi-estilo-link">
              <Link className="nav-link" to="/nosotros">NOSOTROS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">CONTACTOS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}