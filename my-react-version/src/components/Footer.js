import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="some">
            <menu className="somemenu">
                <text className="about_text">Find me on</text>
                <li><a href="https://www.instagram.com/gurogreier/" className="somelink">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/guro-handeland-740171156/" className="somelink">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/guro.handeland/" className="somelink">Facebook</a></li>
            </menu>
        </div>
        <small id="copyright">copyright © Guro Handeland</small>
    </footer>
  )
}

export default Footer