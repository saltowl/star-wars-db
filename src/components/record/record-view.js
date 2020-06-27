import React from 'react';

export default function Record({ item, label, field }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}
