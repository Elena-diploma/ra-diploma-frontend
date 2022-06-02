import React, { useState } from 'react';
import MenuList from '../../menu/MenuList';
import MenuListItem from '../../menu/MenuListItem';
import CatalogMenuItemLink from '../../menu/CatalogMenuItemLink';

const menuItemsCatalog = [
  {
    route: '#',
    name: 'Все',
  },
  {
    route: '#',
    name: 'Женская обувь',
  },
  {
    route: '#',
    name: 'Мужская обувь',
  },
  {
    route: '#',
    name: 'Обувь унисекс',
  },
  {
    route: '#',
    name: 'Детская обувь',
  },
];

export default function CatalogMenu() {
  const [category, setCategory] = useState(menuItemsCatalog[0].name);
  const onSelect = (categoryName) => {
    // console.log('onSelect: ', categoryName);
    setCategory((prevState) => {
      // console.log('prevState: ', prevState);
      if (categoryName === prevState) return prevState;
      return categoryName;
    });
  };
  return (
      <MenuList
          className="catalog-categories nav justify-content-center"
          items={menuItemsCatalog}
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