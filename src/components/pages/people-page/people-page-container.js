import React from 'react';
import PeoplePage from './people-page-view';

export default class PeoplePageContainer extends React.Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return <PeoplePage {...this.state} onPersonSelected={this.onPersonSelected} />;
  }
}
