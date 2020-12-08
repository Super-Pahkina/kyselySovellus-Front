import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

function Etusivu({handleVastaa, handleTulokset}){
    const [kyselyt, setKyselyt] = useState([])

    let kysely_url = 'http://kyselysovellus.herokuapp.com/kyselyt'

    const fetchData = () => {
      fetch(kysely_url)
        .then(Response => Response.json())
        .then(data => setKyselyt(data))
    };
  
    useEffect(() => { fetchData(); }, []);

    return(
        <div>
        <h1>Kaikki kyselyt</h1>
        {kyselyt.map(kysely =>
          <div>
            <h3>{kysely.nimi}</h3>
            <Button onClick={() => handleVastaa(kysely.kysely_id)}>VASTAA</Button>
            <Button onClick={() => handleTulokset(kysely.kysely_id)}>TULOKSET</Button>
          </div>
        )}
      </div>
    )

}

export default Etusivu;