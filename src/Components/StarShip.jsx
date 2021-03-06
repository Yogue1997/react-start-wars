// The parts that I commented are the one the I need to work on
// I wanted to load more data because there are like 4 more pages to display

import React, { useState, useEffect } from 'react';
import Display from './Display';



function StarShip() {
    // storage
    const [data, setData] = useState([]);
    // const [next, setNext] = useState("");
    // const [loading, setLoading] = useState(false)
    useEffect(() => {
        loadData();
        // getData ();
    }, [])

    const loadData = async () => {
        await fetch("https://swapi.dev/api/starships/")
            .then(response => response.json())
            .then(data => setData(data.results))
    }
    // console.log(data);

    // const moreData = async (event) =>{
    //     await fetch("https://swapi.dev/api/starships/")
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data.next !== null){
    //             setLoading(true)
    //         }
    //         else{
    //             setNext(data.next)
    //             console.log(data.next)
    //             setData([...data]);
    //         }
    //     })
    // }






    return (
        <div id='parent'>
            {data.map((dataName, index) =>(
                <Display name = {dataName.name} key={index}/>
            ))}
            {/* <button hidden = {loading} onClick={moreData}>load more</button> */}
        </div>
    )
}



export default StarShip;