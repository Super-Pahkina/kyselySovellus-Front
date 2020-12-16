import React, { useState, useEffect } from 'react';
import Kysymys from './Kysymys'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    div: {
        marginLeft: 20
    },
    button: {
        padding: 10,
        background: 'white',
        margin: 5,
        color: 'black',
        boxShadow: '0 5px 10px 5px rgba(100, 1, 100, .3)',
        '&:hover': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)',

            color: '#FFF'
        }
    }
});
function HaeKysely(props) {
    const classes = useStyles();
    const [kysymykset, setKysymykset] = useState([])
    const [indeksi, setIndeksi] = useState(0)
    const [vastaus, setVastaus] = useState({ syote: '', kysymys: {} })
    const [monivalintaVastaus, setMonivalintaVastaus] = useState({ checkbox: [], kysymys: {} })
    const [vastauslista, setVastauslista] = useState([])
    const [viesti, setViesti] = useState('');
    const [virhe, setVirhe] = useState('');
    const kyselyid = props.kysely_id

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
            if (vastaus.syote.length === 0) {
                setVirhe('Vastaus ei voi olla tyhjä!');

            } else {
                const uusiLista = vastauslista.concat(vastaus)
                setVastauslista(uusiLista)
                saveVastaus(vastaus)
                setVirhe('');
                setVastaus({ syote: '', kysymys: {} })
                handleIndeksi()
            }
        } else if (kysymykset[indeksi].tyyppi === "checkbox") {
            if (monivalintaVastaus.checkbox.length === 0) {
                setVirhe('Vastaus ei voi olla tyhjä!');
            } else {
                const uusiLista = vastauslista.concat(monivalintaVastaus)
                setVastauslista(uusiLista)
                saveMonivalintaVastaus(monivalintaVastaus)
                setVirhe('');
                setMonivalintaVastaus({ checkbox: [], kysymys: {} });
                handleIndeksi()
            }

        } else if (kysymykset[indeksi].tyyppi === "radionappula") {
            if (vastaus.syote.length === 0) {
                setVirhe('Vastaus ei voi olla tyhjä!');
            } else {
                const uusiLista = vastauslista.concat(vastaus)
                setVastauslista(uusiLista)
                saveVastaus(vastaus)
                setVirhe('');
                setVastaus({ syote: '', kysymys: {} })
                handleIndeksi()
            }
        }


    }

    const handleVastausChange = (event) => {
        setVastaus({ syote: event.target.value, kysymys: kysymykset[indeksi] })
        console.log(vastaus)
    }

    const handleCheckboxChange = (event) => {
        let isChecked = event.target.checked
        if (isChecked) {
            let lista = [...monivalintaVastaus.checkbox]
            lista.push(event.target.value)
            setMonivalintaVastaus({ checkbox: lista, kysymys: kysymykset[indeksi] })
        } else if (!isChecked) {
            let lista = [...monivalintaVastaus.checkbox]
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
                    setMonivalintaVastaus({ checkbox: [], kysymys: '' });
                    setViesti('Lisättiin');

                } else {
                    setViesti('Lisäys ei onnistunut');
                }
                console.log(viesti);

            })
    }


    if (indeksi === kysymykset.length) {
        return (
            <div className={classes.div}>
                <h1>Kiitos kyselyyn vastaamisesta!</h1>
                <h3>Vastauksesi</h3>
                <div>
                    {vastauslista.map((vastaus, i) => {
                        if (vastaus.kysymys.tyyppi === "teksti" || vastaus.kysymys.tyyppi === "radionappula") {
                            return (
                                <div>
                                    <b>{vastaus.kysymys.teksti}</b>
                                    <p key={i}>{vastaus.syote}</p>
                                </div>)
                        } else {
                            return (
                                <div>
                                    <b>{vastaus.kysymys.teksti}</b>
                                    {vastaus.checkbox.map(valinta =>
                                        <p>{valinta}</p>
                                    )}
                                </div>)


                        }


                    }

                    )} <Button className={classes.button} a href='/'>Palaa etusivulle</Button></div>
            </div>
        )
    } else {

        return (
            <div className={classes.div}>
                <h1 >{kysymykset[0].kysely.nimi}</h1>
                <h2 >{kysymykset[0].kysely.kuvaus}</h2>
                <p >Tämä on {indeksi + 1} / {kysymykset.length} kysymys</p>
                <Kysymys kysymys={kysymykset[indeksi]} value={vastaus.syote} handleSubmit={handleSubmit} handleRadionappulaChange={handleRadionappulaChange} handleCheckboxChange={handleCheckboxChange} handleVastausChange={handleVastausChange} ></Kysymys>
                <h2>{virhe}</h2>
            </div>
        )
    }

}

export default HaeKysely;


