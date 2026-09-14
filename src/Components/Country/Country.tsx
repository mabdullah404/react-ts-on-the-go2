import { useState } from "react";
import type { CountryType } from "../../Type"
import './Country.css'

export interface CountryProps {
    country: CountryType ;
    handleVisitedCountry: (country:CountryType) => void 
    handleVisitedFlag: (flag:string) => void 
}

export default function Country({ country ,handleVisitedCountry,handleVisitedFlag}: CountryProps) {

    const [visited,setVisited] = useState<boolean>(false)

    const handleVisited =() =>{
        setVisited(!visited)

        handleVisitedCountry(country);
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

    }
    
    return (
        <div className={`country  ${visited? 'country-visited'  : ''}`}>

            {/* <button onClick={()=> setVisited(false)}>Reset</button> */}

            <h3>{country.name.common}</h3>

            <p>{country.capital.capital}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>population :  {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited " : "Mark as visited " }
            </button>
            <br />
            <br />

            <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>
                Add Flag Visited
            </button>
           
        </div>
    )
}