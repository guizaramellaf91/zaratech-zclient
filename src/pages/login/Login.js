import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import api from '../../services/api'
import { history } from '../../history'
import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        api.post('auth', values).then(resp => {
            const { data } = resp
            if (data) {
                console.log(resp)
                localStorage.setItem('token', data)
                history.push('/')
            } 
        })
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>ZClient | Login</h1>
            <p>Digite usuário e senha para prosseguir</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="email"
                            value={this}
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            type="password"
                            name="password"
                            value={this}
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Entrar</button>
                    <Link to='/register'><button className="Login-Btn">Cadastrar</button></Link>
                </Form>
            </Formik>
        </>
    )
}

export default Login