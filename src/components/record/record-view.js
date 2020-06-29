import React from 'react';
import PropTypes from 'prop-types';

function Record({ item, label, field }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
}

Record.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default Record;
