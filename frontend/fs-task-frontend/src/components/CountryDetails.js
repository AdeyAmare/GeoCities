import React from 'react'
import { useSelector } from 'react-redux';

const CountryDetails = ({ country }) => {
    const authState = useSelector(state => state.authReducer)

    const user = authState.user;

    if (!country) {
        return null;
    }


    return (

        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ">
            <div className="h-40 mb-4">
                <img className="object-cover h-full w-full rounded-lg" src={`${country.flagImageUri}`} />
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-800"> Country: {country.name}</h2>
                    <p className="text-gray-600"> Capital: {country.capital}</p>
                    <p className="text-gray-600" > Calling Code: {country.callingCode}</p>
                    <p className="text-gray-600">Number of Regions: {country.numRegions}</p>

                </div>


            </div>

        </div>

    )
}

export default CountryDetails