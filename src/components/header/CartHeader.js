import React from 'react';

export default function CartHeader({handleNavigateCart}) {
    return (
        <div className="header-controls-pic header-controls-cart" onClick={handleNavigateCart}>
            <div className="header-controls-cart-full">1</div>
            <div className="header-controls-cart-menu"></div>
        </div>
    );
}