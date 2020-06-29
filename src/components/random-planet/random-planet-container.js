import React, { useEffect, useState } from 'react';
import { PlanetDetails } from '../main-components';
import PropTypes from 'prop-types';
import './random-planet.css';

function RandomPlanet({ updateInterval }) {
  const [id, setId] = useState(null);

  const updatePlanet = () => setId((Math.floor(Math.random() * 25) + 1).toString());

  useEffect(() => {
    updatePlanet();
    const timer = setInterval(updatePlanet, updateInterval);
    return () => clearInterval(timer);
  }, [updateInterval]);

  return (
    <article className="random-planet jumbotron rounded d-flex">
      <PlanetDetails itemId={id} />
    </article>
  );
}

RandomPlanet.defaultProps = {
  updateInterval: 10000,
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};

export default RandomPlanet;
