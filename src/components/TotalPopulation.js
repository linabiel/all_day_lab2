import React from 'react';

const getTotalPopulation = ({countries}) => {
    const TotalPopulation = countries.reduce((runningTotal, country) => runningTotal + country.population, 0);
        return  TotalPopulation
    
    return (
        <>
        <p>{TotalPopulation}</p>
        </>
    )
    
}

export default getTotalPopulation;