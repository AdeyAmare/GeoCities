import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import CountryDetails from '../components/CountryDetails';
import Form from '../components/Form'
import { logoutUser } from '../redux/authSlice';
import { setHistory } from '../redux/historySlice';

const Search = () => {
    const dispatch = useDispatch()

    const historyState = useSelector(state => state.historyReducer)
    const authState = useSelector(state => state.authReducer)
    const user = authState.user

    const fetchCountries = async () => {
        const response = await fetch('/api/search/getSearchHistory', {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        const json = await response.json();
        if (response.ok) {
            dispatch(setHistory(json))
        }
    }



    return (
        <div>
            <div>
                {user && <button onClick={fetchCountries}>Fetch History</button>}
                <div className='flex flex-row h-screen'>

                    {historyState.history && historyState.history.map((country) => (
                        <CountryDetails key={historyState.history._id} country={country} />
                    ))}
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Search