import React, { useState, useEffect } from 'react';

// import CountryDetail from '../components/CountryDetail';
// import CountrySelector from '../components/CountrySelect'

const CountryContainer = ()  =>   {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() =>  {
        getCountries();
    }, []);

    const getCountries = function() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => setCountries(countries[0].name))
    }

    return (
        <>
        {countries}
        </>
    )

}

export default CountryContainer