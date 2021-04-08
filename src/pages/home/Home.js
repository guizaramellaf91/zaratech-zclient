import React from 'react'
import { history } from '../../history'
import './Home.css'

const Home = () => {
    const deslogarUser = () => {
        localStorage.removeItem('token')
        history.push('/')
    }
    return (
        <>
            <h1>ZClient | Tela Principal</h1>
            <p>Seja bem vindo Administrador!</p>
            <button onClick={deslogarUser} className="Login-Btn">Deslogar</button>
        </>
    )
}

export default Home