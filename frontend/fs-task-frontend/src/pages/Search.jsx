import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setCountryDetail } from '../redux/rapidApiSlice';
import CountryDetails from '../components/CountryDetails';
import Form from '../components/Form'
import { logoutUser } from '../redux/authSlice';

const Search = () => {
    const dispatch = useDispatch()

    const countries = useSelector(state => state.apiReducer)
    const authState = useSelector(state => state.authReducer)
    const user = authState.user

    const fetchCountries = async () => {
        const response = await fetch('/api/search/getSearchHistory', {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        const json = await response.json();
        if (response.ok) {
            dispatch(setCountryDetail(json))
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch(logoutUser)
        dispatch(setCountryDetail(null))
        //console.log(store.getState())


    }

    return (
        <div>
            <div>
                {user && <button onClick={fetchCountries}>Fetch History</button>}
                <div className='flex flex-row h-screen'>

                    {countries.countryDetail && countries.countryDetail.map((country) => (
                        <CountryDetails key={countries.countryDetail._id} country={country} />
                    ))}
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Search