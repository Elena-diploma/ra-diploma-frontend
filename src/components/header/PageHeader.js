import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../img/header-logo.png';
import HeaderMenu from './HeaderMenu';


export default function PageHeader() {
  return (
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <NavLink to="/" className="navbar-brand">
                <img src={headerLogo} alt="Bosa Noga"></img>
              </NavLink>
              <div className="collapase navbar-collapse" id="navbarMain">
                <HeaderMenu />
                <div>
                  <div className="header-controls-pics">
                    <div
                        data-id="search-expander"
                        className="header-controls-pic header-controls-search"
                    ></div>
                    <div className="header-controls-pic header-controls-cart">
                      <div className="header-controls-cart-full">1</div>
                      <div className="header-controls-cart-menu"></div>
                    </div>
                  </div>
                  <form
                      data-id="search-form"
                      className="header-controls-search-form form-inline invisible"
                  >
                    <input className="form-control" placeholder="Поиск"></input>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
  );
}