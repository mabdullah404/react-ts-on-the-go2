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

        // bad way to check object/array cheack 

        // if(visitedCountries.includes(country)){
        //     const remainingCountries = visitedCountries.filter( c=> c !== country);
        //     setVisitedCountries(remainingCountries);
        // }else{
        //      const newVisitedCountry = [...visitedCountries ,country];
        // setVisitedCountries(newVisitedCountry)

        // }

        //Good way to check object/array cheack
        const exits = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
        if(exits){
            const remainingCountries = visitedCountries.filter( c=> c.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountries(remainingCountries);
        }else{
             const newVisitedCountry = [...visitedCountries ,country];
        setVisitedCountries(newVisitedCountry)
        }
       
    }



    const handleVisitedFlag = (flag :string):void=>{
        console.log("Flag Visited : ",flag)

        if(visitedFlag.includes(flag)){
            const remainingFlags = visitedFlag.filter( f=> f !== flag);
            setVisitedFlag(remainingFlags);

        }else{
            const newVisitedFlag = [...visitedFlag ,flag]
            setVisitedFlag(newVisitedFlag);
        }
        
    }

    return (
        <div >

            <h2>Countries : {countries.length} </h2>

            <h4>Visited Countries : {visitedCountries.length}</h4>

            <div className="visitedCountries">
                {
                    visitedCountries.map(country => <p key={country.ccn3.ccn3}>{country.name.common}</p>)
                }
            </div>

            <h4>Visited Flags : {visitedFlag.length}</h4>

            <div className="visited-flag">
                {
                visitedFlag.map(flag => <img src={flag} alt = "Visited"  />)
            }
            </div>
            
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