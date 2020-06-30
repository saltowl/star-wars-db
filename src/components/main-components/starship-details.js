import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => (
  <ItemDetails {...props} type="a starship">
    <Record field="model" label="Model" key={'starship model'} />
    <Record field="length" label="Length" key={'starship length'} />
    <Record field="costInCredits" label="Cost" key={'starship cost in credits'} />
    <Record field="manufacturer" label="Manufacturer" key={'starship manufacturer'} />
    <Record field="crew" label="Crew" key={'starship crew'} />
    <Record field="passengers" label="Passengers" key={'starship passengers'} />
    <Record
      field="cargoCapacity"
      label="Cargo capacity"
      key={'starship cargo capacity'}
    />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage,
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
