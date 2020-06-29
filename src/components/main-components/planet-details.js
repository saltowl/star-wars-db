import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => (
  <ItemDetails {...props} type="a planet">
    <Record field="population" label="Population" key={'planet population'} />
    <Record
      field="rotationPeriod"
      label="Rotation Period"
      key={'planet rotation period'}
    />
    <Record field="diameter" label="Diameter" key={'planet diameter'} />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage,
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
