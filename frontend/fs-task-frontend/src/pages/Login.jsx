import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { store } from '../redux/store';
import { FaRegEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false)

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const dispatch = useDispatch();

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
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
            dispatch(loginUser(json))
            setIsLoading(false);
            console.log(store.getState())
        }



    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
            <main className='flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl '>
                    <div className='w-full md:w-3/5 p-5'>

                        <div className='py-10'>
                            <h2 className="text-3xl font-bold text-green-400 mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign in to Account</h2>
                            <div className="border-2 w-10 border-green-400 inline-block mb-2"></div>
                        </div>
                        <form className='flex flex-col items-center ' onSubmit={handleSubmit}>
                            <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3'>
                                <FaRegEnvelope className="text-gray-400 m-2 " />
                                <input className='bg-gray-100 outline-none text-sm flex-1 transition duration-500 ease-in-out transform' type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} />
                            </div>
                            <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3'>
                                <MdLockOutline className="text-gray-400 m-2" />
                                <input className='bg-gray-100 outline-none text-sm flex-1 transition duration-500 ease-in-out ' type={toggle ? "text" : "password"} placeholder='Password' onChange={(event) => setPassword(event.target.value)} value={password} />
                                <button type="button" onClick={handleToggle} >{toggle ? <FaEyeSlash className="text-gray-400 m-2 " /> : <FaEye className="text-gray-400 m-2 " />}</button>
                            </div>
                            {error && <div className='text-red-500 text-sm text-left mr-[85px] transition duration-500 ease-in-out transform '>{error}</div>}
                            <button className='border-2 border-green-400 text-green-400 rounded-full px-6 md:px-12 py-2 inline-block font-semibold hover:bg-green-400 hover:text-white mt-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' type="submit" disabled={isLoading}>Login</button>
                        </form>
                    </div>
                    <div className=' w-full md:w-2/5 bg-green-400 text-white rounded-tr-2xl rounded-br-2xl py-10 md:py-36 px-6 md:px-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <h2 className='text-3xl font-bold mb-2'>Hello!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Fill up your information and start your journey here. </p>
                        <Link to="/signup" className='border-2 border-white rounded-full px-6 md:px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Sign Up</Link>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Login