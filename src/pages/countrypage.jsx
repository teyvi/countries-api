import React, { useState } from 'react'
import Navbar from '../component/navbar'
import axios from 'axios'

export const Countrypage = () => {
    const [countries, setCountries] = useState([]);


    const url = 'https://restcountries.com/v3.1/all';

    async function displayAllCountries() {
        const restCountries = await axios.get(url)
        const countriesBox = restCountries.data
        const sliceData = countriesBox.slice(0, 5)
        // console.log('sliceddata', sliceData)
        setCountries(countriesBox);
        // sliceData.map((item) => {
        //     console.log(item.name.common)
        //     return null;
        // });

    };
    displayAllCountries()

    return (

        <>
            <Navbar />
            <ul>
            {countries.map((country, index) => <li key={index}>{country.name.common}</li>)}
            </ul>
            
            <ul>
            {countries.map((country, index) => <li key={index}>{country.name.official}</li>)}
            </ul>
            <div>

            </div>

        </>
    );
};

export default Countrypage;

 

