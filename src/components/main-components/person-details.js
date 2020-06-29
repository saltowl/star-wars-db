import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => (
  <ItemDetails {...props} type="a person">
    <Record field="gender" label="Gender" key={'person gender'} />
    <Record field="eyeColor" label="Eye Color" key={'person eye color'} />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage,
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
