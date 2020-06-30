import React from 'react';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../main-components';
import { withRouter } from 'react-router-dom';

function PlanetPage({ match, history }) {
  return (
    <ErrorBoundary>
      <Row>
        <PlanetDetails itemId={match.params.id || null} />
        <PlanetList onItemSelected={(id) => history.push(id)} />
      </Row>
    </ErrorBoundary>
  );
}

export default withRouter(PlanetPage);
