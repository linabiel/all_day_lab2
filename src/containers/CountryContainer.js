import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetails';
import CountrySelector from '../components/CountrySelect'
import GetTotalPopulation from '../components/TotalPopulation'

const CountryContainer = ()  =>   {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() =>  {
        getCountries();
    }, []);

    const getCountries = function() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => setCountries(countries));
    };

    const onFavClick = function (country) {
        const newFavList = [...favouriteCountries, country];
        setFavouriteCountries(newFavList);
    };

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    };

    return (
        <>
        
        <CountrySelector countries={countries} onFavClick={onFavClick} onCountrySelected={onCountrySelected} selectedCountry={selectedCountry} />
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null }
        <GetTotalPopulation countries={countries} />
        </>
    )

}

export default CountryContainer;