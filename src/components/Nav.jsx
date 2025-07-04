
import { Link } from "react-router-dom"

export default function Nav(){
  return(
    <nav>
      <ul className="link-list">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/Menu" className="nav-link">Menu</Link>
        </li>
        <li>
          <Link to="/Reserve" className="nav-link">Reserve</Link>
        </li>
        <li>
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>

  )
}