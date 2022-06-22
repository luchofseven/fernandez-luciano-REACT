import { Link } from 'react-router-dom';

export default function NavProducts() {
    return (
        <ul className="navbar-nav mi-estilo-navProducts">
            <li className="nav-item">
                <Link className="nav-link" to="/category/labial">LABIALES</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/ojos">OJOS</Link>
            </li>
            <li className="nav-item mi-estilo-link">
                <Link className="nav-link" to="/category/rostro">ROSTRO</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/esmalte">ESMALTES</Link>
            </li>
        </ul>
    )
}
