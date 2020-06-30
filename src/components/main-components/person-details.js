import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import Link from '../record-link';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => (
  <ItemDetails {...props} type="a person">
    <Link field="homeworld" label="Homeworld" key={'person homeworld'} />
    <Record field="gender" label="Gender" key={'person gender'} />
    <Record field="eyeColor" label="Eye Color" key={'person eye color'} />
    <Record field="birthYear" label="Birth Year" key={'person birth year'} />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage,
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
