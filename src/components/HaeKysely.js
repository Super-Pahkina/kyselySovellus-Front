import React, { useState, useEffect } from 'react';

function HaeKysely() {
    const [kysely, setKysely] = useState({})


    /*useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('')
            .then(Response => Response.json())
            .then(data => setKysely(data._embedded.carsJOTAINTÄhä))
    }
    */
   setKysely({nimi: 'kissa'})

    return (
        <div>
            {kysely.nimi}
        </div>
    )
}

export default HaeKysely;