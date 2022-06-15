import CartWidget from "./CartWidget.jsx"
import { Link } from "react-router-dom"

export default function NavBar() {

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-alpha-color-one">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/favicon.png" className="mi-estilo-logo" alt="floora logo" height="65px" width="65px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mi-estilo-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><CartWidget /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item mi-estilo-link">
              <Link className="nav-link" to="/aboutus">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}