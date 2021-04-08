import React from 'react'
import { history } from '../../history'
import './Home.css'

const Home = () => {
    const deslogarUser = () => {
        localStorage.removeItem('token_rjtools')
        history.push('/')
    }
    return (
        <>
            <h1>RJTools-e | Tela Principal</h1>
            <p>Seja bem vindo Administrador!</p>
            <button onClick={deslogarUser} className="Login-Btn">Deslogar</button>
        </>
    )
}

export default Home