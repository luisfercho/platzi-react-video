import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginRequest } from '../actions';

import '../assets/styles/components/Login.scss';

import GoogleLogo from '../assets/static/google-icon.png';
import TwitterLogo from '../assets/static/twitter-icon.png';

const Login = (props) => {
  // PARA EL FORMULARIO HAY QUE USAR HOOKS
  const [form, setValues] = useState({
    email: '',
    password: '',
  });
  const handleInputs = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  }
  return (
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__container--form" onSubmit={handleSubmit}>
        <input 
          name="email"
          className="input" 
          type="text" 
          placeholder="Correo"
          onChange={handleInputs} 
        />
        <input 
          name="password"
          className="input" 
          type="password" 
          placeholder="Contraseña" 
          onChange={handleInputs}
        />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={ GoogleLogo } />
          Inicia sesión con Google
        </div>
        <div>
          <img src={ TwitterLogo } />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta 
        <Link to="/register">
          Regístrate
        </Link>
      </p>
    </section> 
  )
}

const mapDispachToProps = {
  loginRequest,
}

export default connect(null, mapDispachToProps)(Login);