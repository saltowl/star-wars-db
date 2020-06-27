import React from 'react';
import Spinner from '../spinner';
import ErrorBlock from '../error-block';

export default (View, getData) => {
  return class extends React.Component {
    state = {
      data: null,
      error: false,
      loading: true,
    };

    componentDidMount() {
      getData()
        .then((data) => this.setState({ data, loading: false }))
        .catch((err) => this.setState({ error: true, loading: false }));
    }

    render() {
      const { loading, error, data } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorBlock />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};
