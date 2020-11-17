import React, { useState, useEffect } from 'react';
import Kysymys from './Kysymys'

function HaeKysely() {
    
    const [kysymykset, setKysymykset] = useState([])
    const [kyselyid, setKyselyid] = useState(1)

    const [indeksi, setIndeksi] = useState(0)
    const [vastaus, setVastaus] = useState({ teksti: '', kysymys: {} })
    const [vastauslista, setVastauslista] = useState([])


    useEffect(() => { fetchData() });

    let kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset`

    const fetchData = () => {
        fetch(kysymys_url)
            .then(Response => Response.json())
            .then(data => setKysymykset(data))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const uusiLista = vastauslista.concat(vastaus)
        setVastauslista(uusiLista)
        setVastaus({ teksti: '', kysymys: {} })
        handleIndeksi()
    }

    const handleVastausChange = (event) => {
        const vastauksenKysymys = JSON.stringify(kysymykset[indeksi])
        setVastaus({ teksti: event.target.value, kysymys: vastauksenKysymys })
        console.log(vastaus)

    }

    const handleIndeksi = () => {

        setIndeksi(indeksi + 1)
    }

    const tallennaVastaukset =()=> {
        console.log("tähän tehään db tallennus")
        return(
            <div></div>
        )
    }


    if (indeksi === kysymykset.length) {
        return (
            <div>
                <h1>kiitti tästä</h1>
                <p>sun vastaukset</p>
                <div>
                    {vastauslista.map(vastaus => <p key={indeksi}>{vastaus.teksti}</p>)}
                </div>
                <button onClick={tallennaVastaukset()}>Lopeta ja tallenna</button>
            </div>
        )
    } else {

        return (
            <div>
                <h1>Tämä on kysely</h1>
                <h1>{kysymykset[0].kysely.nimi}</h1>
                <h2>{kysymykset[0].kysely.kuvaus}</h2>
                <p>Tämä on {indeksi + 1} / {kysymykset.length} kysymys</p>
                <form onSubmit={handleSubmit}>
                    <Kysymys kysymys={kysymykset[indeksi]} value={vastaus.teksti} handleVastausChange={handleVastausChange}></Kysymys>
                    <button type="submit">JATKA</button>
                </form>
            </div>
        )
    }

    /*return (
        <div>
            
            <Kysymys kysymykset={kysymykset}></Kysymys>
         
        </div>
    )*/
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

