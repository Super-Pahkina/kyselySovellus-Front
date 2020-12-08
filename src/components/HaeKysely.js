import React, { useState, useEffect } from 'react';
import KyselyLista from './KyselyLista';
import Kysymys from './Kysymys'
import axios from 'axios';
import { Link } from 'react-router-dom';

function HaeKysely(props) {

    const [kysymykset, setKysymykset] = useState([])
    const [kyselyid, setKyselyid] = useState(props.kysely_id)

    const [indeksi, setIndeksi] = useState(0)
    const [vastaus, setVastaus] = useState({ syote: '', kysymys: {} })
    const [monivalintaVastaus, setMonivalintaVastaus] = useState({ checkbox: [], kysymys: {} })

    const [vastauslista, setVastauslista] = useState([])
    const [viesti, setViesti] = useState('');
    //const [checked, setChecked] = useState('');


    useEffect(() => { fetchData() }, []);

    let kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset`

    const fetchData = () => {
        fetch(kysymys_url)
            .then(Response => Response.json())
            .then(data => setKysymykset(data))
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        

        if (kysymykset[indeksi].tyyppi === "teksti") {
            
            const uusiLista = vastauslista.concat(vastaus)
            setVastauslista(uusiLista)
            saveVastaus(vastaus)

        } else if (kysymykset[indeksi].tyyppi === "checkbox") {
            const uusiLista = vastauslista.concat(monivalintaVastaus)
            setVastauslista(uusiLista)
            saveMonivalintaVastaus(monivalintaVastaus)


        } else if (kysymykset[indeksi].tyyppi === "radionappula") {
            const uusiLista = vastauslista.concat(vastaus)
            setVastauslista(uusiLista)
            saveVastaus(vastaus)
        }

        setVastaus({ syote: '', kysymys: {} })
        setMonivalintaVastaus({ checkbox: [], kysymys: {} })
        handleIndeksi()
        
    }

    const handleVastausChange = (event) => {
        setVastaus({ syote: event.target.value, kysymys: kysymykset[indeksi] })
        console.log(vastaus)
    }

    const handleCheckboxChange = (event) => {
        let isChecked = event.target.checked
        if (isChecked) {
            let lista = monivalintaVastaus.checkbox
            lista.push(event.target.value)
            setMonivalintaVastaus({ checkbox: lista, kysymys: kysymykset[indeksi] })
        } else if (!isChecked) {
            let lista = monivalintaVastaus.checkbox
            let poistolista = lista.filter(f => f !== event.target.value)
            setMonivalintaVastaus({ checkbox: poistolista, kysymys: kysymykset[indeksi] })
        }
        console.log(isChecked)
        console.log(event.target.value)
        console.log("MONIVALINNAT", JSON.stringify(monivalintaVastaus))

    }

    const handleRadionappulaChange = (event) => {
        let isChecked = event.target.checked
        if (isChecked) {
            setVastaus({ syote: event.target.value, kysymys: kysymykset[indeksi] })
        } else if (!isChecked) {
            //let lista = monivalintaVastaus.checkbox
            //let poistolista = lista.filter(f => f !== event.target.value)
            setVastaus({ syote: "", kysymys: kysymykset[indeksi] })
        }
        console.log(isChecked)
        console.log(event.target.value)
        console.log("VASTAUS", JSON.stringify(vastaus))
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

    const saveMonivalintaVastaus = () => {

        const formData = {
            'checkbox': monivalintaVastaus.checkbox,
            'kysymys': monivalintaVastaus.kysymys,
        }

        axios.post(`http://kyselysovellus.herokuapp.com/kyselyt/${kyselyid}/kysymykset/${monivalintaVastaus.kysymys.kysymys_id}/vastaus`, formData)
            .then(response => {
                if (response.status === 200) {
                    setMonivalintaVastaus({ checkbox: '', kysymys: '' });
                    setViesti('Lisättiin');

                } else {
                    setViesti('Lisäys ei onnistunut');
                }
                console.log(viesti);

            })
    }


    if (indeksi === kysymykset.length) {
        return (
            <div>
                <h1>kiitti tästä</h1>
                <p>sun vastaukset</p>
                <div>
                    {vastauslista.map((vastaus, i) => {
                        if (vastaus.kysymys.tyyppi === "teksti" || vastaus.kysymys.tyyppi === "radionappula") {
                            return (
                                <div>
                                    <p>{vastaus.kysymys.teksti}</p>
                                    <p key={i}>{vastaus.syote}</p>
                                </div>)
                        } else{
                            return (
                                <div>
                                    <p>{vastaus.kysymys.teksti}</p>
                                    {vastaus.checkbox.map(valinta => 
                                            <p>{valinta}</p>
                                            )}
                                </div>)

                        }

                    }


                    )}</div>
            </div>
        )
    } else {

        return (
            <div>

                <h1>{kysymykset[0].kysely.nimi}</h1>
                <h2>{kysymykset[0].kysely.kuvaus}</h2>
                <p>Tämä on {indeksi + 1} / {kysymykset.length} kysymys</p>

                <Kysymys kysymys={kysymykset[indeksi]} value={vastaus.syote} handleSubmit={handleSubmit} handleRadionappulaChange={handleRadionappulaChange} handleCheckboxChange={handleCheckboxChange} handleVastausChange={handleVastausChange}></Kysymys>

            </div>
        )
    }

}

export default HaeKysely;


