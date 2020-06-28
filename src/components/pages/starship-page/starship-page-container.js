import React from 'react';
import StarshipPage from './starship-page-view';

export default class StarshipPageContainer extends React.Component {
  state = {
    selectedStarship: null,
  };

  onStarshipSelected = (id) => {
    this.setState({ selectedStarship: id });
  };

  render() {
    return <StarshipPage {...this.state} onStarshipSelected={this.onStarshipSelected} />;
  }
}
