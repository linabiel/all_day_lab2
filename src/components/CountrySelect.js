import React from "react";
// import ListItem from './ListItem';

const CountrySelector = ({countries, onCountrySelected}) =>   {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
    
    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Country</option>
            {countryOptions}
        </select>
    )

}

export default CountrySelector;