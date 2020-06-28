import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../error-boundary';
import Row from '../../row';
import { PersonList, PersonDetails } from '../../main-components';

function PeoplePage({ onPersonSelected, selectedPerson }) {
  return (
    <ErrorBoundary>
      <Row>
        <PersonList onItemSelected={onPersonSelected} />
        <PersonDetails itemId={selectedPerson} />
      </Row>
    </ErrorBoundary>
  );
}

PeoplePage.propTypes = {
  onPersonSelected: PropTypes.func,
  selectedPerson: PropTypes.string,
};

export default PeoplePage;
