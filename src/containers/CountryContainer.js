import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetails';
import CountrySelector from '../components/CountrySelect'
import GetTotalPopulation from '../components/TotalPopulation'

const CountryContainer = ()  =>   {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);
    const [favouriteFilter, setFavouriteFilter] = useState(false);
    const [mappedCountries, setMappedCountries] = useState([]);

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

    const onFavouriteFiltered = function(checked) {
        setFavouriteFilter(checked);
    }

    return (
        <>
        
        <CountrySelector countries={countries} onFavClick={onFavClick} onCountrySelected={onCountrySelected} favouriteCountries={favouriteCountries}
        onFavouriteFiltered={onFavouriteFiltered} selectedCountry={selectedCountry} favouriteFilter={favouriteFilter} mappedCountries={mappedCountries} setMappedCountries={setMappedCountries} />

        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null }
        <GetTotalPopulation countries={countries} />
        </>
    )

}

export default CountryContainer;