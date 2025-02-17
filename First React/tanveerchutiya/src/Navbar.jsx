import React from 'react'

import "./Navbar.css";  // ✅ Importing CSS file


export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </div>
  )
}
