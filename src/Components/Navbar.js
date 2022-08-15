import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({choices,user,logOut}) {
 
  return (
    <nav className="navii">
     {/* <button>open</button> */}
        <ul className="nav_ul">
           <li className="nav-item h5">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item h5">
            <Link className="nav-link" to="/shop">Shop</Link>
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
                {user ? <> <li><a className="dropdown-item" href="#">{user && user.username}</a></li>
                     <li><Link className="dropdown-item" to={`user/${user && user.username}`}>User Information</Link></li></> : null}
                    {user ? <li><span className="dropdown-item btn" onClick={logOut}>Logout</span></li> :
                    <li><Link className="dropdown-item" to="/authentication/login">Login</Link></li>}
                </ul>
                </div>
                    <Link className="text-reset nav-likn " to="/box">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">{choices ? choices.length : "0"}</span>
                    </Link>
           </div>
    </nav>
  )
}
