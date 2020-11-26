import React, { useState, useEffect } from 'react';
import KyselyLista from './KyselyLista';
import Kysymys from './Kysymys'
import axios from 'axios';

function HaeKysely() {

    const [kysymykset, setKysymykset] = useState([])
    const [kyselyid, setKyselyid] = useState(1)

    const [indeksi, setIndeksi] = useState(0)
    const [vastaus, setVastaus] = useState({ syote: '', kysymys: {} })
    const [monivalintaVastaus, setMonivalintaVastaus] = useState({syote:[], kysymys: {}})

    const [vastauslista, setVastauslista] = useState([])
    const [viesti, setViesti] = useState('');
    
    const [checked, setChecked]= useState(false)




    useEffect(() => { fetchData() }, []);

    let kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset`

    const fetchData = () => {
        fetch(kysymys_url)
            .then(Response => Response.json())
            .then(data => setKysymykset(data))
    };

    const handleSubmit = (event) => {
        const target = event.target
        console.log(target.type)

        event.preventDefault()
        const uusiLista = vastauslista.concat(vastaus)
        setVastauslista(uusiLista)

        saveVastaus(vastaus)
        setVastaus({ syote: '', kysymys: {} })
        handleIndeksi()
    }

    const handleVastausChange = (event) => {
        setVastaus({ syote: event.target.value, kysymys: kysymykset[indeksi] })
        console.log(vastaus)
    }

    const handleCheckboxChange=(event)=> {
        let lista = event.target.name
        console.log(lista)
        //let lista = [...monivalintaVastaus.syote, event.target.id]
        //setMonivalintaVastaus({syote:lista, kysymys: kysymykset[indeksi]})
        //const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        //const name = target.name
        //setChecked(value)
    
        //const uusiLista = monivalinta.concat(value)
        //setMonivalinta(uusiLista)

    }

    const handleIndeksi = () => {

        setIndeksi(indeksi + 1)
    }

    const saveVastaus = () => {

        const formData = {
            'syote': vastaus.syote,
            'kysymys': vastaus.kysymys,
        }

        axios.post(`http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset/${vastaus.kysymys.kysymys_id}/vastaus`, formData)
            .then(response => {
                if (response.status === 200) {
                    setVastaus({ syote: '', kysymys: '' });
                    setViesti('Lisättiin');

                } else {
                    setViesti('Lisäys ei onnistunut');
                }
                console.log(viesti);
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
                    { }
                    {vastauslista.map(vastaus =>
                        <div>
                            <p>{vastaus.kysymys.teksti}</p>
                            <p key={indeksi}>{vastaus.syote}</p>
                        </div>
                    )}</div>
                <button>Lopeta</button>
            </div>
        )
    } else {

        return (
            <div>
                <h1>Tämä on kysely</h1>
                <h1>{kysymykset[0].kysely.nimi}</h1>
                <h2>{kysymykset[0].kysely.kuvaus}</h2>
                <p>Tämä on {indeksi + 1} / {kysymykset.length} kysymys</p>
               
                    <Kysymys kysymys={kysymykset[indeksi]} value={vastaus.syote} handleSubmit={handleSubmit} handleCheckboxChange={handleCheckboxChange} handleVastausChange={handleVastausChange}></Kysymys>
               
            </div>
        )
    }

}

export default HaeKysely;

