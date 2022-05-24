import logo from '../images/favicon.png'
import estilos from '../styles/styles.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-alpha-color-one">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="floora logo" height="50px" width="50px"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mi-estilo-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PRODUCTOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PROMOCIONES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">NOSOTROS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar