import React, {useEffect} from "react";
// import ListItem from './ListItem';

const CountrySelector = ({countries, onCountrySelected, favouriteCountries, onFavouriteFiltered, onFavClick, selectedCountry, favouriteFilter, mappedCountries, setMappedCountries}) =>   {

    useEffect(() =>  {
        getCountryOptions();
    }, []);

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
            favourites = countries.map((country, index) => {
        
        return <option value={index} key={index}>{country.name}</option>}
        )} else {
            favourites = countries.map((country, index) => {
                return <option value={index} key={index}>{country.name}</option>}
                )
        }
        setMappedCountries(favourites)
    };
    

    // const getCountryOptions = () => {
    // if (favouriteFilter) {
    //     const countryOptions = countries.map((country, index) => {
    //     return <option value={index} key={index}>{country.name}</option>
    // });

    // }
    // else {
    //     const countryOptions = countries.map((country, index) => {
    //         return <option value={index} key={index}>{country.name}</option>
    //     });
    // }
    // }

    const handleFavClick = function(){
        onFavClick(selectedCountry)
    }

    return(
        <>
        <select defaultValue="" onChange={handleCountryChange}>
            <option value="">Choose a Country</option>
            {mappedCountries}
        </select>
        {/* {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null } */}
        
        <p>Show favourites only: 
        <input type="checkbox" id="checkbox" onClick={handleCheckboxChange}></input>
        </p>
        <p onClick={handleFavClick}>Add to favourites: &#9734;</p>
        </>
    )

}

export default CountrySelector;