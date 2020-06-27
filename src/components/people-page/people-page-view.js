import React from 'react';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import { PersonList, PersonDetails } from '../main-components';

export default function PeoplePage({ onPersonSelected, selectedPerson }) {
  return (
    <ErrorBoundary>
      <Row>
        <PersonList onItemSelected={onPersonSelected} />
        <PersonDetails itemId={selectedPerson} />
      </Row>
    </ErrorBoundary>
  );
}
