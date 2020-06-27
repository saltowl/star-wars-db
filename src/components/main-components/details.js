import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

export const PersonDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
    <Record field="gender" label="Gender" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
);

export const PlanetDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
);

export const StarshipDetails = ({ itemId }) => (
  <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage}>
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);
