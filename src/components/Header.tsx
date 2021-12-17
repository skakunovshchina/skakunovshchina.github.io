import { default as React } from 'react';
import {Link} from "react-router-dom";

const Header = ({config}: any) => {
    const [isClosed, setIsClosed] = React.useState(false);
    const body: any = document.querySelector('body');
    const {width} = body.getBoundingClientRect();

    React.useEffect(() => {
        setIsClosed(width > 783);
    }, []);

    return (
        <>
            <header id="masthead" className="site-header">
                <div className="site-branding">
                    <h1 className="site-title"><a href="/">{config.title}</a></h1>
                </div>
                <nav className="main-navigation" id="site-navigation">
                    <div className="container">
                        <button id="menu-toggle-button" className="menu-toggle" onClick={() => width < 783 && setIsClosed(!isClosed)}>
                            <img className="menu-icon" src="./hamburger-menu.svg"/>
                            <img className="cross-icon" src="./cross-icon.svg"/>
                            <span className="menu-text">Меню</span>
                        </button>
                        {
                            isClosed && <div className="menu-menyu-1-container">
                                <ul id="menu-menyu-1" className="menu nav-menu" onClick={() => width < 783 && setIsClosed(false)}>
                                    {
                                        config.menu.map(({route, title}: any) =>
                                        <li key={title} className="nav-item">
                                            <Link to={route}>{title}</Link>
                                        </li>)
                                    }
                                    {
                                        config.instagram &&
                                        <li className="nav-item">
                                            <a target='_blank' className='instagram-icon-a' href={config.instagram}>
                                                <img width='18' className="instagram-icon" src="./instagram-Icon.svg"/>
                                            </a>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;