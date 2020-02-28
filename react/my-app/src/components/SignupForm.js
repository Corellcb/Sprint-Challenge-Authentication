import React, { useState } from 'react';
import axios from 'axios';

export default function SignupForm(props) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = event => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post('http://localhost:4000/api/auth/register', credentials)
            .then(res => {
                console.log(res);
                props.history.push('/signin')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    value={credentials.username}
                    name='username'
                    type='text'
                    onChange={handleChange}
                    minLength='4'
                    placeholder='username'
                    required
                />
                <br />
                <input 
                    value={credentials.password}
                    name='password'
                    type='text'
                    onChange={handleChange}
                    minLength='4'
                    placeholder='password'
                    required
                />
                <br />
                <input 
                    type='submit'
                />
            </form>
        </div>
    );
};