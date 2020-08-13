import React from 'react';

import '../assets/styles/components/Search.scss';

import classNames from 'classnames';

import { searchVideo } from'../actions';
import { connect } from'react-redux';

const title = "¿Qué quieres ver hoy?";
const placeholder = "Buscar...";

const Search = ( props ) => {
    
    const { isHome } = props

    const inputStyle = classNames('input', {
        isHome
    }) ;

    const handleInput = (e) => {
        props.searchVideo(e.target.value)
    }

    return (
        <section className="main">
            <h2 className="main__title">{ title }</h2>
            <input 
                type="text" 
                className={ inputStyle } 
                placeholder={ placeholder } 
                onKeyUp={ handleInput }
            />
        </section>
    )
};

const mapStateToProps = state => {
    return {
        search: state.search,
    }
}

const mapDispatchToProps = {
    searchVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);