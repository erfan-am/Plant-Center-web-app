import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({choices}) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Plant Center</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
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
           <div className="icons">
            <div className="dropdown mr-5">
                <span className="dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="20"
                alt="Black and White Portrait of Link Man"
                loading="lazy"
                />
                </span>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                    <Link className="text-reset nav-likn " to="/box">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">{choices ? choices.length : "0"}</span>
                    </Link>
           </div>
      </div>
    </div>
  </nav>
  )
}
