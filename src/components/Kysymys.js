import React from 'react';

function Kysymys({kysymys}) {
    

    if(kysymys.tyyppi === "teksti") {
        return (
            <div>
                {kysymys.teksti} <br></br>
                <input id="text" type="text"></input>
            </div>
        )
    } else {
        return (
            <div>
                <p>väärä kyssärityyppi</p>
            </div>   
           )
    }
    
    

}

export default Kysymys;