import React, {useEffect} from "react";

const CountrySelector = ({countries, onCountrySelected, favouriteCountries, onFavouriteFiltered, onFavClick, selectedCountry, 
    favouriteFilter, mappedCountries, setMappedCountries}) =>   {

    useEffect(() =>  {
        getCountryOptions();
    }, [countries, favouriteFilter]);

    const handleCountryChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    };

    const handleCheckboxChange = function(event) {
        const checked = event.target.checked;
        onFavouriteFiltered(checked)
    }
    // let mappedCountries = []
    const getCountryOptions = function () {
        let favourites
        if (favouriteFilter) {
            favourites = favouriteCountries.map((country, index) => {
        
        return <option value={index} key={index}>{country.name}</option>}
        )} else {
            favourites = countries.map((country, index) => {
                return <option value={index} key={index}>{country.name}</option>}
                )
        }
        setMappedCountries(favourites)
    };

    const handleFavClick = function(){
        onFavClick(selectedCountry)
    }

    return(
        <>
        <select defaultValue="" onChange={handleCountryChange}>
            <option value="">Choose a Country</option>
            {mappedCountries}
        </select>
        
        <p>Show favourites only: 
        <input type="checkbox" id="checkbox" onClick={handleCheckboxChange}></input>
        </p>
        <p onClick={handleFavClick}>Add to favourites: &#9734;</p>
        </>
    )

}

export default CountrySelector;