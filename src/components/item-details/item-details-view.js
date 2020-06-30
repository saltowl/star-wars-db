import React from 'react';
import './item-details.css';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import Item from './item-view';
import ErrorBlock from '../error-block';

function ItemDetails({ item, image, loading, error, children, type }) {
  const showItem = item && !loading && !error;
  const showInitialMessage = item === null && !loading && !error;

  return (
    <div className="item-details card d-flex">
      {loading && <Spinner />}
      {showItem && (
        <Item item={item} image={image}>
          {children}
        </Item>
      )}
      {showInitialMessage && <span>Select {type} from a list</span>}
      {error && <ErrorBlock />}
    </div>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.object,
  image: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default React.memo(ItemDetails);
