import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav id="navbar" className="navbar" data-testid="navbar">
      <div className="navbar-brand">
        <Link id="navbar-logo" to="/" data-testid="navbar-logo">
          UserAdmin
        </Link>
      </div>
      <ul className="navbar-links" role="list">
        <li>
          <NavLink
            id="nav-home"
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            data-testid="nav-home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            id="nav-users"
            to="/users"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            data-testid="nav-users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
