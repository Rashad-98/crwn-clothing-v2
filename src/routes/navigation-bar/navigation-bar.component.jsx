import './navigation-bar.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

function NavigationBar() {
    return (
        <Fragment>
            <nav className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;