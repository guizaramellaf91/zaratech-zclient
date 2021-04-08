import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import api from '../../services/api';
import { history } from '../../history';
import './Login.css';

const Login = (err) => {
    const handleSubmit = values => {
        api.post('auth', values).then(resp => {
            const { data } = resp;
            if (data) {
                console.log(resp);
                localStorage.setItem('token', data);
                history.push('/');
            } else {
                console.log('Nenhum retorno da API!');
                history.push('/login');
            }
        });
    };
    const validations = yup.object().shape({
        login: yup.string().required(),
        senha: yup.string().min(3).required()
    });
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
                            name="login"
                            value={this}
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="login"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            type="password"
                            name="senha"
                            value={this}
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="senha"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Entrar</button>
                    <Link to='/register'><button className="Login-Btn">Cadastrar</button></Link>
                </Form>
            </Formik>
        </>
    );
};

export default Login;