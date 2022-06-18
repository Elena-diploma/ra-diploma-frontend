import React from 'react';
import { useMatch } from 'react-router-dom';

export default function CatalogMenuItemLink({
    route,
    className,
    name,
    onSelect,
}) {
    const mainPage = useMatch('/');
    const catalogPage = useMatch('/catalog');
    const hrefAttrValue = `${route}${mainPage?.pathname || catalogPage?.pathname}`;
    return (
        <a
            href={hrefAttrValue}
            className={className}
            onClick={() => onSelect(name)}
        >
            {name}
        </a>
    );
}