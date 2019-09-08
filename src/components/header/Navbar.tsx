import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { postLogOut } from '../../store/actions/authActions';
import '../styles.css';

interface IProps {
    logged: boolean,
    onLogOut: Function
}

const Navbar: React.SFC<IProps> = ({ logged, onLogOut }) => {

        const userLinks = (
            <React.Fragment>
                <li className='nav-item'>
                    <NavLink  to='/profile' className='nav-link' activeClassName={'link-active'}>Profile</NavLink>
                </li>
                <li className='nav-item' onClick={() => onLogOut()}>
                    <NavLink to='#' className='nav-link' activeClassName={'link-active'}>Log out</NavLink>
                </li> 
            </React.Fragment>
        );

        const guestLinks = (
            <li className='nav-item'>
                <NavLink to='/login' className='nav-link' activeClassName={'link-active'}>Log in</NavLink>
            </li>
        );

        return (
            <header>
                <nav className='nav-header'>
                    <li className='nav-logo'>
                        <NavLink to='/'>
                            <img src={'/story.svg'} alt="LOGO"/>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/' exact className='nav-link' activeClassName={'link-active'}>Main</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/share' className='nav-link' activeClassName={'link-active'}>Share story</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link' activeClassName={'link-active'}>About</NavLink>
                    </li>
                </nav>
                <nav className='nav-header'>
                    { logged ? userLinks : guestLinks }
                </nav>
            </header>
        );
};

const mapStateToProps = (state: any) => {
    return {
        logged: state.auth.logged
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLogOut: () => dispatch(postLogOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

