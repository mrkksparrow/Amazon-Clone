import React from 'react';
import"./App.css";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

function Header() {
    return (
        <div className='header'>
            <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
            />
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Kavin</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'> & Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <div className="header__optionBasket">
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                    <ShoppingCartSharpIcon />
                    
                </div>

            </div>
        </div>
    )
}

export default Header