import React from 'react';
import './item-details.css';

import Spinner from '../spinner';
import Item from './item-view';
import ErrorBlock from '../error-block';

export default function ItemDetails({ item, image, loading, error, children }) {
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
      {showInitialMessage && <span>Select a person from a list</span>}
      {error && <ErrorBlock />}
    </div>
  );
}
