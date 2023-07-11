import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/authSlice'
import { setCountryDetail } from '../redux/rapidApiSlice'
import { setHistory } from '../redux/historySlice'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const authState = useSelector(state => state.authReducer)
    const user = authState.user
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch(logoutUser())
        dispatch(setHistory(null))
        dispatch(setCountryDetail(null))
        //console.log(store.getState())


    }
    return (
        <div>
            {user &&
                <nav className='flex justify-between items-center bg-white text-black py-4 px-6 shadow-md'>
                    <Link to="/" className="text-2xl font-bold">GeoCities</Link>
                    <button className='bg-white text-black py-2 px-4 border-none font-semibold' onClick={handleLogout}>Logout</button>
                </nav>}

        </div>


    )
}

export default Navbar