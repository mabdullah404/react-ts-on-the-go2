import { use, useState } from "react"
import type { CountryType } from "../../Type"
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedCountries , setVisitedCountries] = useState<CountryType[]>([]);

    const countries = use(countriesPromise) ;
    // console.log(countries)

    const handleVisitedCountry = (country :CountryType):void=>{

        const newVisitedCountry = [...visitedCountries ,country];
        setVisitedCountries(newVisitedCountry)
    }

    return (
        <div >

            <h2>Countries : {countries.length} </h2>

            <h4>Visited Countries : {visitedCountries.length}</h4>
            
            <div className="countries">
                {
                    countries.map(country => (
                        <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            handleVisitedCountry={handleVisitedCountry}
                        />
                    ))
                }
            </div>
                        
                   
        </div>
    )
}