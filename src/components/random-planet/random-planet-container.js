import React from 'react';
import { PlanetDetails } from '../main-components';
import './random-planet.css';

export default class RandomPlanetContainer extends React.Component {
  static defaultProps = {
    updateInterval: 10000,
  };

  state = {
    id: null,
  };

  componentDidMount() {
    this.updatePlanet();
    this.timer = setInterval(this.updatePlanet, this.props.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1;
    this.setState({ id });
  };

  render() {
    return (
      <article className="random-planet jumbotron rounded d-flex">
        <PlanetDetails itemId={this.state.id} />
      </article>
    );
  }
}
