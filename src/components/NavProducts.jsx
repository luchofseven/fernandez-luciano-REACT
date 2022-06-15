import { Link } from 'react-router-dom';

export default function NavProducts() {
    return (
        <ul className="navbar-nav mi-estilo-navProducts">
            <li className="nav-item">
                <Link className="nav-link" to="/category/labial">Labiales</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/ojos">Ojos</Link>
            </li>
            <li className="nav-item mi-estilo-link">
                <Link className="nav-link" to="/category/rostro">Rostro</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/esmalte">Esmaltes</Link>
            </li>
        </ul>
    )
}
