import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/authSlice'
import { store } from '../redux/store'

const Navbar = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch(logoutUser())
        console.log(store.getState())


    }
    return (
        <nav>
            <button onClick={handleLogout}>Log Out</button>
        </nav>
    )
}

export default Navbar
