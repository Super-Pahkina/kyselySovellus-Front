import React, { useState, useEffect } from 'react';
import Kysymys from './Kysymys'

function HaeKysely() {
    //const [kysely, setKysely] = useState({})
    const [kysymykset, setKysymykset] = useState([])

    let kysymys_url = 'http://kyselysovellus.herokuapp.com/kyselyt/1/kysymykset'

    const fetchData = () => {
        fetch(kysymys_url)
            .then(Response => Response.json())
            .then(data => setKysymykset(data))
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <form>

            {kysymykset.map(kysymys =>
                <Kysymys key={kysymys.kysymys_id} kysymys={kysymys} />
            )}
            <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default HaeKysely;

/*return (
    <div>
        {
            sairaalassa.map( r => {
                var date = r.date.substr(0,10);
                if (date === "2020-10-30"){
                    return (
                        <div>
                            Päivä: { date }<br />
                            Paikka: {r.area } <br />
                            Sairaalassa: { r.totalHospitalised }, joista osastolla { r.inWard } ja tehohoidossa { r.inIcu } <br /><br />
                        </div>
                    );
                }
            })
        }
    </div>
);*/
