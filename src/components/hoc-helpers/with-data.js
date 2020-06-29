import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import ErrorBlock from '../error-block';

export default (View) => (props) => {
  const [state, setState] = useState({ data: null, error: false, loading: true });
  const { getData } = props;

  useEffect(() => {
    getData()
      .then((data) => setState((state) => ({ ...state, data, loading: false })))
      .catch(() => setState((state) => ({ ...state, error: true, loading: false })));
  }, [getData]);

  const { loading, error, data } = state;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorBlock />;
  }

  return <View {...props} data={data} />;
};
