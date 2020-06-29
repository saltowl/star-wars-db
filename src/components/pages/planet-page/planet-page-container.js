import React, { useState } from 'react';
import ErrorBoundary from '../../error-boundary';
import Row from '../../row';
import { PlanetList, PlanetDetails } from '../../main-components';

export default function PlanetPageContainer() {
  const [selectedPlanet, setPlanet] = useState(null);

  const onPlanetSelected = (id) => {
    setPlanet(id);
  };

  return (
    <ErrorBoundary>
      <Row>
        <PlanetList onItemSelected={onPlanetSelected} />
        <PlanetDetails itemId={selectedPlanet} />
      </Row>
    </ErrorBoundary>
  );
}
