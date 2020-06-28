import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../error-boundary';
import Row from '../../row';
import { PlanetList, PlanetDetails } from '../../main-components';

function PlanetPage({ onPlanetSelected, selectedPlanet }) {
  return (
    <ErrorBoundary>
      <Row>
        <PlanetList onItemSelected={onPlanetSelected} />
        <PlanetDetails itemId={selectedPlanet} />
      </Row>
    </ErrorBoundary>
  );
}

PlanetPage.propTypes = {
  onPlanetSelected: PropTypes.func,
  selectedPlanet: PropTypes.string,
};

export default PlanetPage;
