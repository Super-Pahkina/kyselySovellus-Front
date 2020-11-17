import React, { useState, useEffect } from 'react';


function KyselyLista() {
    const [kyselyt, setKyselyt] = useState([])

    let kysely_url = 'http://kyselysovellus.herokuapp.com/kyselyt'

    const fetchData = () => {
        fetch(kysely_url)
            .then(Response => Response.json())
            .then(data => setKyselyt(data))
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <p>Kaikki kyselyt</p>
            {kyselyt.map(kysely =>
                <div>
                    <a href="/">
                        {kysely.nimi}
                    </a>
                    
                </div>
            )}
            
        </div>
    )

}

export default KyselyLista;