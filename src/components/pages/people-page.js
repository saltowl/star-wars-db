import React from 'react';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import { PersonList, PersonDetails } from '../main-components';
import { withRouter } from 'react-router-dom';

function PeoplePage({ history, match }) {
  return (
    <ErrorBoundary>
      <Row>
        <PersonDetails itemId={match.params.id || null} />
        <PersonList onItemSelected={(id) => history.push(id)} />
      </Row>
    </ErrorBoundary>
  );
}

export default withRouter(PeoplePage);
