
import {Link} from 'react-router-dom'

export default function Nav({choices}) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link className="navbar-brand mt-2 mt-lg-0" to="#">
      <h1>Plants Center</h1>
      </Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item h5">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item h5">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item h5">
          <Link className="nav-link" to="/about-us">About Us</Link>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center">
      <Link className="text-reset me-3" to="/box">
        <i className="fas fa-shopping-cart"></i>
        <span className="badge rounded-pill badge-notification bg-danger">{choices ? choices.length : "0"}</span>
      </Link>

      <div className="dropdown">
        <Link
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          to="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <Link className="dropdown-item h5" to="#">Some news</Link>
          </li>
          <li>
            <Link className="dropdown-item h5" to="#">Another news</Link>
          </li>
          <li>
            <Link className="dropdown-item h5" to="#">Something else here</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <Link
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of Link Man"
            loading="lazy"
          />
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <Link className="dropdown-item h5" to="#">My profile</Link>
          </li>
          <li>
            <Link className="dropdown-item h5" to="#">Settings</Link>
          </li>
          <li>
            <Link className="dropdown-item h5" to="#">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}
