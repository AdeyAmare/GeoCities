import React, { useState } from 'react'
import { setCountryDetail } from '../redux/rapidApiSlice';
import { store } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux'
import countryCodes from '../countryCodes.json'
import CountryDetails from '../components/CountryDetails';

const Form = () => {

    const [countryCode, setCountryCode] = useState('')
    const [error, setError] = useState('');

    const authState = useSelector(state => state.authReducer)
    const user = authState.user;

    const dispatch = useDispatch();
    const countries = useSelector(state => state.apiReducer)

    const handleSelectChange = (event) => {
        setCountryCode(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user && countryCode) {
            const response = await fetch(`/api/country/getCountryDetails?param=${countryCode}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json();

            const arr = [json]


            console.log(arr)

            if (response.ok) {
                setCountryCode('')
                dispatch(setCountryDetail(arr))
                console.log(store.getState())
            }
        } else {
            setError('Please select a country first. ')
        }


    }

    return (
        <div className=" relative">
            <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' onChange={handleSelectChange}>
                <option value="">Select a country</option>
                {
                    countryCodes.map(code => (
                        <option key={code.isoCode} value={code.isoCode}>{code.isoCode}-{code.country}</option>
                    ))
                }
            </select>
            <button className='mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700' onClick={handleSubmit}>Search</button>
            {error && (
                <p className='text-red-400 mt-2'>{error}</p>
            )}
            <div className="mt-4">
                {countries.countryDetail && countries.countryDetail.map((country) => (
                    <CountryDetails key={countries.countryDetail._id} country={country} />
                ))}

            </div>

        </div>
    )
}

export default Form