import React from 'react';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from './random-planet-view';

export default class RandomPlanetContainer extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.timer = setInterval(this.updatePlanet(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (error) => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    return <RandomPlanet {...this.state} />;
  }
}
