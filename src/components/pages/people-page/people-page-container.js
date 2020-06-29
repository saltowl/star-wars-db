import React, { useState } from 'react';
import ErrorBoundary from '../../error-boundary';
import Row from '../../row';
import { PersonList, PersonDetails } from '../../main-components';

export default function PeoplePageContainer() {
  const [selectedPerson, setPerson] = useState(null);

  const onPersonSelected = (id) => {
    setPerson(id);
  };

  return (
    <ErrorBoundary>
      <Row>
        <PersonList onItemSelected={onPersonSelected} />
        <PersonDetails itemId={selectedPerson} />
      </Row>
    </ErrorBoundary>
  );
}
