import { use, useState } from "react"
import type { CountryType } from "../../Type"
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedCountries , setVisitedCountries] = useState<CountryType[]>([]);

    const [visitedFlag, setVisitedFlag] = useState <string[]>([]);




    const countries = use(countriesPromise) ;
    // console.log(countries)

    const handleVisitedCountry = (country :CountryType):void=>{

        const newVisitedCountry = [...visitedCountries ,country];
        setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlag = (flag :string):void=>{
        console.log("Flag Visited : ",flag)
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
                            handleVisitedFlag= {handleVisitedFlag}
                        />
                    ))
                }
            </div>
                        
                   
        </div>
    )
}