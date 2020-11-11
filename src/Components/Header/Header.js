import React from 'react';
import Cart from "../Icons/Cart";
import Logo from "../Icons/Logo";
import './_Header.scss';

const Header = ({ totalCartItems, showSideBar}) => {
    return (
        <header className='header'>
            <div className="logo">
                <Logo/>
            </div>
            <div className="header-navs">
               <a href='#' >Shop</a>
               <a href='#' >Learn</a>
            </div>
            <div className="cart-img">
                <Cart onClick={showSideBar}/>
                <span className='cart-no'>{totalCartItems}</span>
            </div>
        </header>
    )
};

export default (Header);
