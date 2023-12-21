import React from 'react';
import { Link } from 'react-router-dom';
import "./css/navbar.css"


const Navbar = () => {
  return (
    <nav>
      <h2 className='navTitle'>Michael Tapia</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        {/* Add more links for other pages */}
      </ul>
    </nav>
  );
};

export default Navbar;