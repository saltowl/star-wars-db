import React from 'react';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../main-components';
import { withRouter } from 'react-router-dom';

function PlanetPage({ match, history }) {
  return (
    <ErrorBoundary>
      <Row>
        <PlanetList onItemSelected={(id) => history.push(id)} />
        <PlanetDetails itemId={match.params.id || null} />
      </Row>
    </ErrorBoundary>
  );
}

export default withRouter(PlanetPage);
