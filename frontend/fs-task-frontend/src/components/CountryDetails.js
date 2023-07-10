import React from 'react'
import { useSelector } from 'react-redux';

const CountryDetails = ({ country }) => {
    const authState = useSelector(state => state.authReducer)

    const user = authState.user;

    if (!country) {
        return null;
    }


    return (

        <div className="w-1/4 flex flex-col ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={`${country.flagImageUri}`} />
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-800">{country.name}</h2>
                    <p className="text-gray-600"> {country.capital}</p>
                    <p className="text-gray-600" >{country.callingcode}</p>
                    <p className="text-gray-600">{country.numRegions}</p>

                </div>


            </div>

        </div>

    )
}

export default CountryDetails