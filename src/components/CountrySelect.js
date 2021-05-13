import React from "react";
// import ListItem from './ListItem';

const CountrySelector = ({countries, onCountrySelected, onFavouriteFiltered, onFavClick, selectedCountry}) =>   {

    const handleCountryChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    };

    const handleCheckboxChange = function(event) {
        const checked = event.target.checked;
        onFavouriteFiltered(checked)
    }
    
    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    });

    const handleFavClick = function(){
        onFavClick(selectedCountry)
    }

    return(
        <>
        <select defaultValue="" onChange={handleCountryChange}>
            <option value="">Choose a Country</option>
            {countryOptions}
        </select>
        {/* {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null } */}
        
        <p>Show favourites only: 
        <input type="checkbox" id="checkbox"></input>
        </p>
        <p onClick={handleFavClick}>Add to favourites: &#9734;</p>
        </>
    )

}

export default CountrySelector;