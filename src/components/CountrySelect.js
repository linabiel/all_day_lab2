import React from "react";
// import ListItem from './ListItem';

const CountrySelector = ({countries, onCountrySelected, onFavClick, selectedCountry}) =>   {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    };
    
    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    });

    const handleFavClick = function(){
        onFavClick(selectedCountry)
    }

    return(
        <>
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Country</option>
            {countryOptions}
        </select>
        {/* {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null } */}
        <span onClick={handleFavClick}>&#9734;</span>
        </>
    )

}

export default CountrySelector;