import React from 'react';
import ErrorBlock from '../error-block';

export default class ErrorBoundaryContainer extends React.PureComponent {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBlock />;
    }

    return this.props.children;
  }
}
