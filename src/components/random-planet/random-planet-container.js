import React from 'react';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from './random-planet-view';

export default class RandomPlanetContainer extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return <RandomPlanet {...this.state} />;
  }
}
