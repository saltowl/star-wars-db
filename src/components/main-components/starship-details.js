import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => (
  <ItemDetails {...props} type="a starship">
    <Record field="model" label="Model" key={'starship model'} />
    <Record field="length" label="Length" key={'starship length'} />
    <Record field="costInCredits" label="Cost" key={'starship cost in credits'} />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage,
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
