import React from 'react';
import './item-list.css';

export default function ItemList({ data, onItemSelected, children }) {
  const itemList = data.map((item) => {
    const { id } = item;
    return (
      <li className="list-group-item" key={id} onClick={() => onItemSelected(id)}>
        {children(item)}
      </li>
    );
  });
  return <ul className="item-list list-group">{itemList}</ul>;
}
