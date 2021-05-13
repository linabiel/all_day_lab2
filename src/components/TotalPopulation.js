import React from 'react';

const getTotalPopulation = ({countries}) => {
    const TotalPopulation = countries.reduce((runningTotal, country) => runningTotal + country.population, 0);
    
    return (
        <>
        <p>Total World Population: {TotalPopulation}</p>
        </>
    )
    
}

export default getTotalPopulation;