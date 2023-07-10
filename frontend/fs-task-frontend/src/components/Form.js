import React, { useState } from 'react'
import { setCountryDetail } from '../redux/rapidApiSlice';
import { store } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux'
import { createCountryDetail } from '../redux/rapidApiSlice';
import CountryDetails from '../components/CountryDetails';

const Form = () => {

    const [countryCode, setCountryCode] = useState('')
    const authState = useSelector(state => state.authReducer)
    const user = authState.user;

    const dispatch = useDispatch();
    const countries = useSelector(state => state.apiReducer)


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user) {
            const response = await fetch(`/api/country/getCountryDetails?param=${countryCode}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json();
            console.log(json)

            if (response.ok) {
                setCountryCode('')
                dispatch(createCountryDetail(json))
                console.log(store.getState())
            }
        }


    }

    return (
        <div className="bg-gray-200 text-gray-200 h-screen w-1/4 flex flex-col justify-between shadow-lg">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Search a country code </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4" >
                        <label className="block text-gray-400 font-semibold mb-2" for="name">
                            Country Code
                        </label>
                        <input className="w-full  text-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" name="name" placeholder="Country Code" type="text" onChange={(event) => setCountryCode(event.target.value)} value={countryCode} />
                    </div>


                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" type="submit">
                        Search
                    </button>
                </form>
            </div>

            <div className='flex flex-row h-screen'>

                {countries.countryDetail && countries.countryDetail.map((country) => (
                    country.code === countryCode ? <CountryDetails key={countries.countryDetail._id} country={country} /> : null
                ))}
            </div>

            <div className="p-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full" type="button">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Form