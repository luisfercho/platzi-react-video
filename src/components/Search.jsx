import React from 'react';

import '../assets/styles/components/Search.scss';

const title = "¿Qué quieres ver hoy?";
const placeholder = "Buscar...";

const Search = () => (
    <section className="main">
        <h2 className="main__title">{ title }</h2>
        <input type="text" className="input" placeholder={ placeholder } />
    </section>
);

export default Search;