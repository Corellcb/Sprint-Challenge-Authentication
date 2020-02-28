import React, { useState } from 'react';
import axios from 'axios';

export default function SigninForm(props) {
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
            .post('http://localhost:4000/api/auth/login', credentials)
            .then(res => {
                console.log(res);
                props.history.push('/jokes');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form>
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
                    onSubmit={handleSubmit}
                />
            </form>
        </div>
    );
};