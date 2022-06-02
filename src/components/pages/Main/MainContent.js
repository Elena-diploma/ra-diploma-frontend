import React, { useEffect } from 'react';
import Loader from '../../Loader';

export default function MainContent() {
    // useEffect(() => {
    // },[]);
    return (
        <>
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <Loader />
            </section>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Loader />
            </section>
        </>
    );
}