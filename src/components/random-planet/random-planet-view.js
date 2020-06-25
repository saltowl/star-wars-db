import React from 'react';
import './random-planet.css';

import Spinner from '../spinner';
import Planet from './planet-view';
import ErrorBlock from '../error-block';

export default function RandomPlanet({ planet, loading, error }) {
  return (
    <article className="random-planet jumbotron rounded d-flex">
      {loading ? <Spinner /> : error ? <ErrorBlock /> : <Planet {...planet} />}
    </article>
  );
}
