import React from 'react';
import './app.css';

import ErrorBoundary from '../error-boundary';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

export default function App({}) {
  return (
    <ErrorBoundary>
      <div className="app col mb2">
        <AppHeader />
        <RandomPlanet />

        <PeoplePage />
      </div>
    </ErrorBoundary>
  );
}
