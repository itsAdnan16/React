//  import {useEffect,useState} from "react"

//  function useCurrencyInfo(currency){
//     const [data,setData] = useState({})
//     useEffect(()=>{
//         fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
//         .then(()=>resizeBy.json())
//         .then((res)=>setData(res[currency]))
//         console.log(data)

//     },[currency])
//     return data
//  }

//  export default useCurrencyInfo
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json()) 
            .then((res) => {
                setData(res[currency]);
                console.log(res[currency]); 
            })
            .catch((error) => console.error("Error fetching data:", error)); 

    }, [currency]);

    return data;
}

export default useCurrencyInfo;
