import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

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
export const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps,
);

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets,
});
export const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameAndModel)),
  mapPlanetMethodsToProps,
);

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships,
});
export const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameAndPopulation)),
  mapStarshipMethodsToProps,
);
