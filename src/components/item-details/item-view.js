import React from 'react';

export default function Item({ item, image, children }) {
  const { name } = item;

  return (
    <React.Fragment>
      <img className="item-details__image" src={image} alt={name} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => React.cloneElement(child, { item }))}
        </ul>
      </div>
    </React.Fragment>
  );
}
