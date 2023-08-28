import React from 'react';
import '../styles.css';

function Home() {
  return (
     <section className="grid">
        <div className="main_content">
                <h2>This is the website of <a href="about.html">Guro Handeland</a>.
                Her stuff. What she has done in different forms and ways.
                In absolute self written (but google inspired) html css js (react) synergy.
                I wanted this page to be as static as possible. No extra fun stuff.
                Have patience. I do. More will come and arrive.</h2>
        </div>
        <div className="home_nav">
            <nav className="home_nav_list">
                <li className="home_nav_item"><button type="home_nav_button">Home</button></li>
                <li className="home_nav_item"><button type="home_nav_button">About</button></li>
                <li className="home_nav_item"><button type="home_nav_button">Drawings</button></li>
                <li className="home_nav_item"><button type="home_nav_button">Photo</button></li>
                <li className="home_nav_item"><button type="home_nav_button">Projects</button></li>
                <li className="home_nav_item"><button type="home_nav_button">Whereabouts</button></li>
            </nav>
        </div>
    </section>
  )
}

export default Home