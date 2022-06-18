import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchHeader } from '../Search';
import CartHeader from './CartHeader';

export default function PageHeaderWidget() {
    const [invisible, setInvisible] = useState(true);
    const [form, setForm] = useState({ search: '' });
    const navigate = useNavigate();

    const toggleInvisible = () => {
        setInvisible((prev) => !prev);
        setForm((prevForm) => ({ ...prevForm, search: form.search.trim() }));
        if (form.search.trim()) {
            setForm({ search: '' });
            navigate('/catalog');
        }
    };

    const handleNavigateCart = () => {
        console.log('PageHeaderWidget_handleNavigateCart_click');
        navigate('/cart');
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        console.log({ name, value });
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div>
            <div className="header-controls-pics">
                <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                    onClick={toggleInvisible}
                ></div>
                <CartHeader handleNavigateCart={handleNavigateCart} />
                <SearchHeader
                    invisible={invisible}
                    form={form}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
}