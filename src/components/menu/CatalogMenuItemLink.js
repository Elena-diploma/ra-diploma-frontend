import React from 'react';
// import { NavLink, useMatch, useParams } from 'react-router-dom';

export default function CatalogMenuItemLink({

    route,
    className,
    name,
    onSelect,}) {
    return (
        <a href={route} className={className} onClick={() => onSelect(name)}>
            {name}
        </a>
    );
}