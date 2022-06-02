import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogContent from './components/pages/Catalog/CatalogContent';
import MainContent from './components/pages/Main/MainContent';
import Page404Content from './components/pages/404/Page404Content';
import AboutContent from './components/pages/About/AboutContent';
import ContactsContent from './components/pages/Contacts/ContactsContent';
import PageHeader from './components/header/PageHeader';
import PageFooter from './components/footer/PageFooter';
import Banner from './components/Banner';

export default function App() {
    return (
        <Router>
            <PageHeader />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <Routes>
                            {/* <Route path="/catalog/:id" element={<Product />} /> */}
                            <Route path="/catalog" element={<CatalogContent />} />
                            <Route path="/about" element={<AboutContent />} />
                            <Route path="/contacts" element={<ContactsContent />} />
                            <Route path="/" element={<MainContent />} />
                            <Route path="*" element={<Page404Content />} />
                        </Routes>
                    </div>
                </div>
            </main>
            <PageFooter />
        </Router>
    );
}