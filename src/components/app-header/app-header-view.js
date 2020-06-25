import React from 'react';
import './app-header.css';

export default function AppHeader() {
  return (
    <header className="header d-flex">
      <h1>
        <a href="#">Star Wars Database</a>
      </h1>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </header>
  );
}
