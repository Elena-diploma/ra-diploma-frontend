import React from 'react';
import TopsalesContent from './TopsalesContent';
import CatalogContent from '../Catalog/CatalogContent';

export default function MainContent() {

    return (
        <>
            <TopsalesContent />
            <CatalogContent nosearch={true}/>
        </>
    );
}