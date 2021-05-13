import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetails';
import CountrySelector from '../components/CountrySelect'
import GetTotalPopulation from '../components/TotalPopulation'

const CountryContainer = ()  =>   {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() =>  {
        getCountries();
    }, []);

    const getCountries = function() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    return (
        <>
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null }
        <GetTotalPopulation countries={countries} />
        </>
    )

}

export default CountryContainer;