import React from 'react';
import ErrorBoundary from '../error-boundary';
import { StarshipList } from '../main-components';
import { withRouter } from 'react-router-dom';

function StarshipPage({ history }) {
  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={(id) => history.push(id)} />
    </ErrorBoundary>
  );
}

export default withRouter(StarshipPage);
