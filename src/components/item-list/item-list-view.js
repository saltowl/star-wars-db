import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';

function ItemList({ data, onItemSelected, children }) {
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

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default React.memo(ItemList);
