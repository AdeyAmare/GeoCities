import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { signupUser } from '../redux/authSlice';
import { store } from '../redux/store';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {

        event.preventDefault();
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error)
        }

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch(signupUser(json));
            setIsLoading(false);
            console.log(store.getState())

        }



    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email: </label>
            <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
            <label>Password: </label>
            <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
            <button type="submit" disabled={isLoading}>Sign up</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Signup