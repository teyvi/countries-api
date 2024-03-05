import React from 'react'
import Navbar from '../component/navbar'

export const Countrypage = () => {

    const url = 'https://restcountries.com/v3.1/all';

    function displayCountries(){

        let allCountries = fetch(url).then((response) => {
    console.log('country',response.json())
})

    };

    displayCountries()

// async function displayAllCountries(){
//     const countries = await fetch(url)
//     console.log("countries", countries)

// }
// displayAllCountries()

//create a function to display just five countries in the console
//use a string method to get 5 countries
//get function
//call function
function display5Countries(){
    fetch(url)
    .then((response) => response.json()) 
    .then((data) =>{console.log('First 5 Countries:' ,data.slice(0,5));
    }) 
    .catch((error) => {
        console.error('Error fetching data:', error);
      });
}
display5Countries()


  return (

    <>
    <Navbar/>
    <h1>This is the country page</h1>
    
    </>
  );
};

export default Countrypage;