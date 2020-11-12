import React, { useState, useEffect } from 'react';
import Kysymys from './Kysymys'

function HaeKysely() {
    //const [kysely, setKysely] = useState({})
    const [kysymykset, setKysymykset] = useState([])
    const[kyselyid, setKyselyid] = useState(1)
    
    
    
    useEffect(() => {fetchData()});

    let kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset`
    //let kysely_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}`

    const fetchData = () => {
        fetch(kysymys_url)
            .then(Response => Response.json())
            .then(data => setKysymykset(data))
            //.then(data => setKysely(data.kysely))

    };
    
    /*const handleVastaukset =()=> {
        setVastaukset(vastaukset.concat(vastaus))
    }*/

    return (
        <div>
            
            <Kysymys kysymykset={kysymykset}></Kysymys>
         
        </div>
    )
}

export default HaeKysely;

/*
   
            <form onSubmit={handleVastaukset()}>
            {kysymykset.map(kysymys =>
                <Kysymys key={kysymys.kysymys_id} kysymys={kysymys}/>
            )}
            <button>SUBMIT</button>
            </form>
            */

