import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>Página não encontrada :(</h1>
            <Link to='/'><button className="Login-Btn">Voltar</button></Link>
        </>
    )
}

export default NotFound;