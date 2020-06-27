import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

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

export const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
export const PlanetList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllPlanets,
);
export const StarshipList = withData(
  withChildFunction(ItemList, renderNameAndPopulation),
  getAllStarships,
);
