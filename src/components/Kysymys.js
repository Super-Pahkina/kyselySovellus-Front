import React, { useState } from 'react';

function Kysymys({ kysymykset }) {

    const kysymys = kysymykset[0]
    const [vastaus, setVastaus] = useState({ teksti: '', kysymys: `${kysymykset[0]}` })
    const[vastaukset, setVastaukset] = useState([])


    const handleVastaus = (e) => {
        e.preventDefault()
        setVastaus({teksti: e.target.value, kysymys: `${kysymykset[0]}`})
        console.log("Vastaus", vastaus)
        //setVastaus({ ...vastaus.teksti, [e.target.name]: e.target.value })
        
        
    }

    const tallennaVastaukset=()=> {
        console.log("KISSA")
    }

    return (
        <div>
            

            <form onSubmit={tallennaVastaukset}>
                {kysymykset.map(kysymys => {
                    if(kysymys.tyyppi === "teksti") {
                    return (
                        <div key={kysymys.kysymys_id}>
                            {kysymys.teksti} <br></br>
                            <input id="text" type="text" value={vastaus.teksti} onChange={(e) => handleVastaus(e)}></input>
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
    )
    





}

export default Kysymys;

/*
<h1>{kysymykset[0].kysely.nimi}</h1>
            <p><strong>{kysymykset[0].kysely.kuvaus}</strong></p>
            */