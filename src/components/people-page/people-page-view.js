import React from 'react';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import { PersonList, PersonDetails } from '../main-components';

export default function PeoplePage({ onPersonSelected, selectedPerson, renderItem }) {
  return (
    <ErrorBoundary>
      <Row>
        <PersonList onItemSelected={onPersonSelected} renderItem={renderItem} />
        <PersonDetails itemId={selectedPerson} />
      </Row>
    </ErrorBoundary>
  );
}
