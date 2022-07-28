import React, { useState } from 'react';
import axios from 'axios';

export default function Login({setAuth, token}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        // don't forget to put the token in App and pass it down
        axios.post('https://plantspace-fennec-foxes.herokuapp.com/auth/token/login/', {
            username: username,
            password: password,
        }).then((res) => {
            const token = res.data.auth_token
            setAuth(username, token)
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    
    return (
        <>
        <h2>Please Log In</h2>
        {error && <div className='error'>{error}</div>}
        <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-controls">
                <label htmlFor="username-field">username</label>
                <input id="username-field" type="text" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-controls">
                <label htmlFor="password-field">password</label>
                <input id="password" type="password" onChange={(e)  => setPassword(e.target.value)}/>
            </div>
            <div className="form-submit">
                <input type="submit" value="Log In"/>
            </div>
        </form>
        
        </>
    )
}
