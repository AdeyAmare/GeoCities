import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/authSlice'
import { setCountryDetail } from '../redux/rapidApiSlice'
import { setHistory } from '../redux/historySlice'
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
            {user && <button onClick={handleLogout}>Logout</button>}

        </div>


    )
}

export default Navbar