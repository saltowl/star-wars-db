import React from 'react';
import PropTypes from 'prop-types';

function Item({ item, image, children }) {
  const { name } = item;

  return (
    <React.Fragment>
      <img className="item-details__image img-fluid" src={image} alt={name} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => React.cloneElement(child, { item }))}
        </ul>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default React.memo(Item);
