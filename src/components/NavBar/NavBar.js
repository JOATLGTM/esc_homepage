import React from 'react'
import './navbar.css'

export default function NavBar() {
  return (
    <div className="nav">
      <div>
        <nav>
          <ul className="nm-menu">
            <li className="">
              <a className="links">Shop</a>
            </li>
            <li>
              <a className="links">Pages</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <a className="title" href="/">ESC AND COMPANY, INC.</a>
      </div>
      <div>
        <ul className="nm-menu">
          <li>
            <a className="links">Sign In</a>
          </li>
          <li>
            <a className="links">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
