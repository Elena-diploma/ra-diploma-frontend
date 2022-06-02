import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItemLink(props) {
  return (
      <Link to={props.route} className={props.className}>
        {props.name}
      </Link>
  );
}