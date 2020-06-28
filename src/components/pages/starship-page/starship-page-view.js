import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../error-boundary';
import Row from '../../row';
import { StarshipList, StarshipDetails } from '../../main-components';

function StarshipPage({ onStarshipSelected, selectedStarship }) {
  return (
    <ErrorBoundary>
      <Row>
        <StarshipList onItemSelected={onStarshipSelected} />
        <StarshipDetails itemId={selectedStarship} />
      </Row>
    </ErrorBoundary>
  );
}

StarshipPage.propTypes = {
  onStarshipSelected: PropTypes.func,
  selectedStarship: PropTypes.string,
};

export default StarshipPage;
