import React from 'react';
import './app-header.css';
import { Link } from 'react-router-dom';

export default React.memo(function AppHeader() {
  return (
    <header className="header d-flex">
      <h1>
        <Link to="/">Star Wars Database</Link>
      </h1>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
      </ul>
    </header>
  );
});
