import React from 'react';
import './App.css';

function Navbar() {
  return (
    <div className="container center">
    <nav className="menu">
        <h1 className="menu__logo">Steadfast</h1>

        <div className="menu__right">
            <ul className="menu__list">
                <li className="menu__list-item"><a class="menu__link menu__link--active" href="#">Home</a></li>
                <li className="menu__list-item"><a class="menu__link" href="#">Page1</a></li>
                <li className="menu__list-item"><a class="menu__link" href="#">Page2</a></li>
                <li className="menu__list-item"><a class="menu__link" href="#">Page3</a></li>
            </ul>

            <button className="menu__search-button"></button>    
        </div>
    </nav>
</div>
  );
}

export default Navbar;
