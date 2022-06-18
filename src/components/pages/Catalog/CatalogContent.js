import React, { useState } from 'react';
import CatalogMenu from './CatalogMenu';
import { SearchCatalog } from '../../Search';
import SectionCardContent from '../../SectionCardContent';
import ButtonOffset from './ButtonOffset';
import Loader from '../../Loader';

const catalogCardsList = [

];

const menuItemsCatalog = [
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

export default function CatalogContent({ nosearch }) {
    const menuItems = [
        {
            route: '#',
            name: 'Все',
        },
        ...menuItemsCatalog,
    ];
    const [category, setCategory] = useState(menuItems[0].name);
    const onSelect = (categoryName) => {
        setCategory((prevState) => {
            if (categoryName === prevState) return prevState;
            return categoryName;
        });
    };

    const onOffset = () => {
        console.log('Offset button click');
    };

    const handleSubmit = (evt) => {
        console.log('CatalogContent_SearchCatalog_handleSubmit_click');
        evt.preventDefault();
    };

    const catalogCards = catalogCardsList.map((cardProps) => (
        <SectionCardContent key={cardProps.id} props={cardProps} />
    ));

    return (
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {nosearch ? null : <SearchCatalog handleSubmit={handleSubmit} />}
                <CatalogMenu
                    menuItems={menuItems}
                    category={category}
                    onSelect={onSelect}
                />
                {catalogCards.length ? catalogCards : <Loader />}
                {catalogCards.length >= 6 ? <ButtonOffset onOffset={onOffset} /> : null}
            </section>
        </>
    );
}