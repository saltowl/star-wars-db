import React, { useState } from 'react';
import ErrorBoundary from '../../error-boundary';
import Row from '../../row';
import { StarshipList, StarshipDetails } from '../../main-components';

export default function StarshipPageContainer() {
  const [selectedStarship, setStarship] = useState(null);

  const onStarshipSelected = (id) => {
    setStarship(id);
  };

  return (
    <ErrorBoundary>
      <Row>
        <StarshipList onItemSelected={onStarshipSelected} />
        <StarshipDetails itemId={selectedStarship} />
      </Row>
    </ErrorBoundary>
  );
}
