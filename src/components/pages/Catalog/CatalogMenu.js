import React from 'react';
import MenuList from '../../menu/MenuList';
import MenuListItem from '../../menu/MenuListItem';
import CatalogMenuItemLink from './CatalogMenuItemLink';

export default function CatalogMenu({ menuItems, category, onSelect }) {
  return (
      <MenuList
          className="catalog-categories nav justify-content-center"
          items={menuItems}
      >
        {(items) =>
            items.map((item, index) => (
                <MenuListItem key={index} className="nav-item">
                  <CatalogMenuItemLink
                      className={
                        category === item.name ? 'nav-link active' : 'nav-link'
                      }
                      route={item.route}
                      name={item.name}
                  />
                </MenuListItem>
            ))
        }
      </MenuList>
  );
}