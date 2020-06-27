import React from 'react';

export default function Row({ children }) {
  const columnClass = `col-md-${Math.floor(12 / children.length)}`;
  const columns = children.map((child, i) => (
    <div className={columnClass} key={i}>
      {child}
    </div>
  ));

  return <div className="row mb2">{columns}</div>;
}
