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
                                    <img src="https://www.freepnglogos.com/uploads/lg-logo-png/lg-logo-calgary-appliance-service-repair-24.png" width="200" alt="lg logo, calgary appliance service repair" />                        <span className="logo-text hide-on-med-and-down">LANG GIG</span>
                                    </a>
                                </h1>
                            </li>
                        </ul>
                        <ul className="navbar-list right">
                            <li>
                                <a className="waves-effect waves-block waves-light notification-button" href="javascript:void(0);" data-target="notifications-dropdown"><i className="material-icons">notifications_none<small className="notification-badge orange accent-3">5</small></i></a>
                                <ul className="dropdown-content" id="notifications-dropdown" tabindex="0">
                                    <li tabindex="0">
                                        <h6>NOTIFICATIONS<span className="new badge">5</span></h6>
                                    </li>
                                    <li className="divider" tabindex="0"></li>
                                    <li tabindex="0"><a className="black-text" href="#!"><span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
                                        <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                                    </li>
                                    <li tabindex="0"><a className="black-text" href="#!"><span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                                        <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
                                    </li>
                                    <li tabindex="0"><a className="black-text" href="#!"><span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                                        <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
                                    </li>
                                    <li tabindex="0"><a className="black-text" href="#!"><span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                                        <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
                                    </li>
                                    <li tabindex="0"><a className="black-text" href="#!"><span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                                        <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>        
            </div>
        </header>
    )
}

export default Header;