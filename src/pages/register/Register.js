import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import api from '../../services/api'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        api.post('user', values).then(resp => {
            const { data } = resp
            if (data) {
                console.log('cadastro realizado com sucesso!')
                history.push('/login')
            }
        })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>RJTools-e | Registre-se</h1>
            <p>Preencha os campos para criar um novo usuário.</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="firstName"
                            value={this}
                            placeholder="Digite o primeiro nome"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="firstName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="lastName"
                            value={this}
                            placeholder="Digite o sobrenome"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="lastName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="email"
                            value={this}
                            type="email"
                            placeholder="Digite o e-mail"
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
                            name="password"
                            value={this}
                            placeholder="Digite a senha"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Confirmar Cadastro</button>
                    <Link to='/'><button className="Login-Btn">Voltar</button></Link>
                </Form>
            </Formik>
        </>
    )
}

export default Register