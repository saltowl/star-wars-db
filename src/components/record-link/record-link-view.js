import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecordLink({ item, label, field }) {
  return (
    <li className="list-group-item">
      <span className="term">
        <Link to={item[field].link}>{label}</Link>
      </span>
    </li>
  );
}

RecordLink.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default React.memo(RecordLink);
