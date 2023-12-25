import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <div className="container">
                <div className="header-box">
                    <Link to={'/'} className={'headerLink'}>Todo</Link>
                    <Link to={'/user'} className={'headerLink'}>User</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;