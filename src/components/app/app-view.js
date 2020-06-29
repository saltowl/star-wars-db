import React from 'react';
import './app.css';

import { SwapiServiceContext } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import ErrorBoundary from '../error-boundary';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import { StarshipDetails } from '../main-components';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const swapiService = new SwapiService();

export default function App() {
  return (
    <div className="app col mb2">
      <ErrorBoundary>
        <SwapiServiceContext.Provider value={swapiService}>
          <BrowserRouter>
            <AppHeader />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                exact
                render={() => <h1>Welcome to Star Wars database</h1>}
              />

              <Route path="/people/:id?" exact component={PeoplePage} />

              <Route path="/planets/:id?" component={PlanetPage} />

              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => <StarshipDetails itemId={match.params.id} />}
              />

              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </BrowserRouter>
        </SwapiServiceContext.Provider>
      </ErrorBoundary>
    </div>
  );
}
