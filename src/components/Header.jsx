import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';

import HeaderImg from "../assets/static/logo-platzi-video-BW2.png";
import UserIcon from "../assets/static/user-icon.png";

import gravatar from '../utils/gravatar';

import PropTypes from 'prop-types';

const Header = (props) => {
    const { user } = props;

    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    return (
        <header className="header">
            <Link to="/" rel="canonical">
                <img className="header__img" src={ HeaderImg } alt="Platzi Video" />
            </Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                <img src={hasUser ? gravatar(user.email) : UserIcon } alt="" />
                <p>Perfil</p>
            </div>
            <ul>
                {hasUser ?
                    <li><a href="/" >{user.name}</a></li> :
                    null
                }
                {hasUser ?
                    <li>
                        <a href="#" onClick={handleLogout} >
                            Cerrar Sesión
                        </a>
                    </li> :
                    <li>
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                }
            </ul>
            </div>
        </header>
    )
};

const mapStateToProps = (state) =>  {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

Header.propTypes = {
    user: PropTypes.object
}

export default connect( mapStateToProps, mapDispatchToProps )(Header);