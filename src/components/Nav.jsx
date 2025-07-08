
import { Link } from "react-router-dom"

export default function Nav({className, toggleMenu}){
  return(
    <nav className={className}>
      <ul className="link-list">
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/About" className="nav-link" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/Menu" className="nav-link" onClick={toggleMenu}>Menu</Link>
        </li>
        <li>
          <Link to="/Reserve" className="nav-link" onClick={toggleMenu}>Reserve</Link>
        </li>
        <li>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>

  )
}