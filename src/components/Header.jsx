import React from 'react';

const Header = () => {
    return(
        <header className="page-topbar" id="header">
            <div className="navbar navbar-fixed"> 
                <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-light-blue-cyan">
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li>
                                <h1 className="logo-wrapper">
                                    <a className="brand-logo darken-1" href="index.html">
                                    <img src="logoo.gif"alt="lg logo, calgary appliance service repair" />                  
                                  
                                    </a>
                                </h1>
                            </li>
                        </ul>
                        
                    </div>
                </nav>        
            </div>
        </header>
    )
}

export default Header;