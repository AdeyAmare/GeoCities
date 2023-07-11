import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import CountryDetails from '../components/CountryDetails';
import Form from '../components/Form'
import { logoutUser } from '../redux/authSlice';
import { setHistory } from '../redux/historySlice';

const Search = () => {
    const dispatch = useDispatch()

    const [tab, setTab] = useState('search')

    const historyState = useSelector(state => state.historyReducer)
    const authState = useSelector(state => state.authReducer)
    const user = authState.user

    const handleTabChange = (tab) => {
        setTab(tab)
    }

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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div>
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 mt-10">
                    <button
                        className={`w-32 py-2 px-4 text-lg font-medium ${tab === 'search' ? 'bg-gray-400 text-white' : 'text-gray-700'
                            } hover:bg-gray-400 hover:text-white rounded-lg focus:outline-none`}
                        onClick={() => handleTabChange('search')}
                    >
                        Search
                    </button>
                    <button
                        className={`w-32 py-2 px-4 text-lg font-medium ${tab === 'grid' ? 'bg-gray-400 text-white' : 'text-gray-700'
                            } ml-0 sm:ml-4 mt-4 sm:mt-0 hover:bg-gray-400 hover:text-white rounded-lg focus:outline-none`}
                        onClick={() => handleTabChange('grid')}
                    >
                        Fetch History
                    </button>
                </div>
                <div className="bg-white rounded-lg p-6">
                    {tab === 'search' && (
                        <div className="max-w-lg mx-auto">
                            <Form />
                        </div>
                    )}
                    {tab === 'grid' && (
                        <div className="flex flex-col items-center justify-center">
                            <button
                                className="w-32 mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                onClick={fetchCountries}
                            >
                                Fetch History
                            </button>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
                                {historyState.history &&
                                    historyState.history.map((country) => (
                                        <CountryDetails key={country._id} country={country} />
                                    ))
                                }
                            </div>
                            {(!historyState.history) && (
                                <p className="text-center text-red-500">No history to show</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search