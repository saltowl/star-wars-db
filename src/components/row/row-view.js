import React from 'react';
import PropTypes from 'prop-types';

function Row({ children }) {
  const columnClass = `col-md-${Math.floor(12 / children.length)}`;
  const columns = children.map((child, i) => (
    <div className={columnClass} key={i}>
      {child}
    </div>
  ));

  return <div className="row mb2">{columns}</div>;
}

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default React.memo(Row);
