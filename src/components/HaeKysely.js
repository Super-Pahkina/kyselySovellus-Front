import React, { useState, useEffect } from 'react';
import KyselyLista from './KyselyLista';
import Kysymys from './Kysymys'
import axios from 'axios';

function HaeKysely() {

    const [kysymykset, setKysymykset] = useState([])
    const [kyselyid, setKyselyid] = useState(1)

    const [indeksi, setIndeksi] = useState(0)
    const [vastaus, setVastaus] = useState({ syote: '', kysymys: {} })
    const [vastauslista, setVastauslista] = useState([])
    const [viesti, setViesti] = useState('');
    



    useEffect(() => { fetchData() });

    let kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset`

    const fetchData = () => {
        fetch(kysymys_url)
            .then(Response => Response.json())
            .then(data => setKysymykset(data))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        saveVastaus(vastaus)
        //saveVastaukset()
        /*const uusiLista = vastauslista.concat(vastaus)
        setVastauslista(uusiLista)
        setVastaus({ syote: '', kysymys: {} })
        handleIndeksi()*/
        setVastaus({ syote: '', kysymys: {} })
        handleIndeksi()
    }

    const handleVastausChange = (event) => {
        const vastauksenKysymys = JSON.stringify(kysymykset[indeksi])
        setVastaus({ syote: event.target.value, kysymys: vastauksenKysymys })
        console.log(vastaus)

        /* setCar({...car, [event.target.name]: event.target.value});*/


    }

    const handleIndeksi = () => {

        setIndeksi(indeksi + 1)
    }

    function mapToJson(vastauslista) {
        return JSON.stringify([...vastauslista]);
    }
    const saveVastaus = () => {
        
        const formData = {
        'syote': vastaus.syote,
        'kysymys': vastaus.kysymys,
        }
        
        axios.post(`http://kyselysovellus.herokuapp.com/vastaus`, formData)
        .then(response => {
        if (response.status === 200) {
        setVastaus( {syote: '', kysymys: ''} );
        setViesti('Lisättiin');
        } else {
        setViesti('Lisäys ei onnistunut');
        }
        })
     }
        // Tässä on komponentin muu koodi ja form
        


    /*const saveVastaus = (vastaus) => {
        fetch(`http://kyselysovellus.herokuapp.com/vastaukset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vastaus)
        })

            /*  .then(res => fetchData()) 
            .catch(err => console.error(err))

    }
*/
    /*const saveVastaukset = (vastauslista) => {
        fetch(`http://kyselysovellus.herokuapp.com/vastaukset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: mapToJson()

            //JSON.stringify(vastauslista)
        })

            /*  .then(res => fetchData()) 
            .catch(err => console.error(err))

    }
*/


    if (indeksi === kysymykset.length) {
        return (
            <div>
                <h1>kiitti tästä</h1>
                <p>sun vastaukset</p>
                <div>
                    {vastauslista.map(vastaus => <p key={indeksi}>{vastaus.teksti}</p>)}
                </div>
                <button >Lopeta ja tallenna</button>
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

