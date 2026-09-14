
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './Type';
import Countries from './Components/Countries/Countries';


// step 1: Create a promise load data 

const countriesPromise = async ():Promise <CountryType []> =>{
  const res = await fetch ('https://openapi.programming-hero.com/api/all')
  const data = await res.json();
  return data.countries  ;
}

function App() {
  

  return (
    <>
    
      <h2>React ts on the go </h2>

      <Suspense fallback={<div>Loading...</div>}>

      <Countries countriesPromise = {countriesPromise()}></Countries>



      </Suspense>

      
    </>
  )
}

export default App
