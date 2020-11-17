import React, { useState } from 'react';

function Kysymys({ kysymys, value, handleVastausChange }) {

    if (kysymys.tyyppi === "teksti") {
        return (
            <div>
                <p></p>{kysymys.teksti} <br></br>
                <textarea
                    id="text"
                    type="text"
                    value={value}
                    onChange={handleVastausChange}
                ></textarea>

            </div>

        )
    } else {
        return (
            <div></div>
        )

    }

    /*const [vastaus, setVastaus] = useState({ teksti: '', kysymys:'' })
    const [vastaukset, setVastaukset] =useState([])
    const[laskuri, setLaskuri] = useState(0)

            
    const handleVastaus = (event) => {
        event.preventDefault()
        //setVastaus({teksti: e.target.value, kysymys: `${kysymykset[0]}`})
        //setVastaus({ ...vastaus.teksti, [e.target.name]: e.target.value })
        setVastaus({nimi:event.target.value, kysymys:JSON.stringify(kysymykset[0])})
        //setVastaus({...vastaus, [event.target.name]: event.target.value})
        //setLaskuri()
        //setVastaukset(vastaukset.concat(vastaus))
        console.log("Vastaus", vastaus)
        console.log("vastaukset", vastaukset)
    }

    const tallennaVastaukset=()=> {

    }

    

    return (
        <div>
            
            <form onSubmit={tallennaVastaukset}>
                {kysymykset.map((kysymys,index) => {
                    if(kysymys.tyyppi === "teksti") {
                    return (
                        <div key={kysymys.kysymys_id}>
                            <p>Tämä on indeksi {index +1}</p>
                            <p>{kysymys.teksti} </p><br></br>
                            <input id="text" type="text" value={vastaus.nimi} onChange={handleVastaus}></input>
                            
                        </div>
                    )
                    } else  {
                        return (
                            <div key={kysymys.kysymys_id}>
                                <p>väärä kyssärityyppi</p>
                            </div>   
                           )

                    }

                }
                )}
                <button type ="submit" >SUBMIT</button>
            </form>
        </div>
    )*/






}

export default Kysymys;

/*
<h1>{kysymykset[0].kysely.nimi}</h1>
            <p><strong>{kysymykset[0].kysely.kuvaus}</strong></p>
            */