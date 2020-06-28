import React from 'react';
import PlanetPage from './planet-page-view';

export default class PlanetPageContainer extends React.Component {
  state = {
    selectedPlanet: null,
  };

  onPlanetSelected = (id) => {
    this.setState({ selectedPlanet: id });
  };

  render() {
    return <PlanetPage {...this.state} onPlanetSelected={this.onPlanetSelected} />;
  }
}
