import React from 'react';
import Logo from '../../images/Logo.png'
import './style.css'

const Header = () => {
    return (
        <div className='nav'>
            <img className='logo' alt='logo' src={Logo} />
        </div>
    )
};

export default Header