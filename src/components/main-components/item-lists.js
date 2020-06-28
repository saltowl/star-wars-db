import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction, withSwapiService, compose } from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);
const renderNameAndPopulation = ({ name, population }) => (
  <span>
    {name} ({population})
  </span>
);

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople,
});
export const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets,
});
export const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderNameAndPopulation),
)(ItemList);

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships,
});
export const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderNameAndModel),
)(ItemList);
