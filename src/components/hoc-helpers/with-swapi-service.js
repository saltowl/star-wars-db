import React, { useContext } from 'react';
import { SwapiServiceContext } from '../swapi-service-context';

export default (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    const swapiService = useContext(SwapiServiceContext);
    const serviceProps = mapMethodsToProps(swapiService);
    return <Wrapped {...props} {...serviceProps} />;
  };
};
