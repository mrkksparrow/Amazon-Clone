import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png' />
            </Link>

            <div className="login__container">
                <h1>Sing-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className="login__signInButton">Sign In</button>

                </form>

                <p>
                By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                </p>

                <button className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
