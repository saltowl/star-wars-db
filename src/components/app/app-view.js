import React from 'react';
import './app.css';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import ErrorBoundary from '../error-boundary';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app col mb2">
            <AppHeader />
            <RandomPlanet />

            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
