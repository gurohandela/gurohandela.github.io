
import React from 'react'

function Header() {
  return (
    <header classNameName="my_header">
    <div className="nav">
        <nav className="nav_list">
            <li className="nav_item"><a className="active" href="index.html">Home</a></li>
            <li className="nav_item"><a href="about.html">About</a></li>
            <li className="nav_item"><a href="drawings.html">Drawings</a></li>
            <li className="nav_item"><a href="photo.html">Photo</a></li>
            <li className="nav_item"><a href="projects.html">Projects</a></li>
            <li className="nav_item"><a href="where.html">Whereabouts</a></li>
        </nav>
    </div>
</header>
  )
}

export default Header

