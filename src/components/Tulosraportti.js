import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tulosraportti(props) {

    const [kysely_id, setKysely_id] = useState(props.kysely_id)
    const [data, setData] = useState([])

    const [kysymysLista, setKysymyslista] = useState([])

    const vastaus_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kysely_id}/vastaukset`
    const kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kysely_id}/kysymykset`

    useEffect(() => { fetchData() }, []);

    const fetchData = () => {

        axios.get(vastaus_url)
            .then(response => setData(response.data))

        axios.get(kysymys_url)
            .then(response => setKysymyslista(response.data))
        console.log("LISTA", kysymysLista)
        console.log("DATA", data)
    }

    return (
        <div>

            <h2>vastaukset:</h2>
            {kysymysLista.map((kysymys, index) =>
                <div>
                    <p key={index}><strong>{kysymys.teksti}</strong></p>
                    {data.map((vastaus, indeksi) => {

                        if (vastaus.kysymys.kysymys_id === kysymys.kysymys_id) {
                            console.log(vastaus.syote);
                            return (
                                <p key={indeksi}>{vastaus.syote}</p>
                            )

                        }
                    }

                    )}
                </div>
            )}

        </div>
    )
}

export default Tulosraportti;