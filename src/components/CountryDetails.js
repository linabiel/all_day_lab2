import React from 'react';

const CountryDetail = ({selectedCountry}) => {
    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p><img src={selectedCountry.flag} alt={selectedCountry.name} /></p>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            <p></p>
        </div>
    )
}

export default CountryDetail;