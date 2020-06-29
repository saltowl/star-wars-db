import React from 'react';
import './app.css';

import { SwapiServiceContext } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import ErrorBoundary from '../error-boundary';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

const swapiService = new SwapiService();

export default function App() {
  return (
    <ErrorBoundary>
      <SwapiServiceContext.Provider value={swapiService}>
        <div className="app col mb2">
          <AppHeader />
          <RandomPlanet />

          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </div>
      </SwapiServiceContext.Provider>
    </ErrorBoundary>
  );
}
