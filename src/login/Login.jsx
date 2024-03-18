import React, { Fragment, useState } from "react";
import classes from './components/form.module.css';
import { Link } from 'react-router-dom'

function Login(props) {
    const { userName, setUserName, password, setPassword, loginHandler } = props;
    return (
        <Fragment>
            <div className={classes.formComtainer}>
                <h1>Login Form</h1>
                <form className={classes.form}>
                    <input
                        type="text"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit" onClick={loginHandler}><Link to={'/products'}>Login</Link></button>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;
