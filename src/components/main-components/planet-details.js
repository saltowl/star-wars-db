import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getImageUrl,
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
