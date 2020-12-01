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


    /*<MenuMUI />
        <Switch>
            <Route exact path='/' component={ Lomake } />
            <Route path='/Ajopäiväkirja' render={(props) => <Ajopaivakirja {...props} ajopaivakirja = {ajopaivakirja} /> } />
            <Route path='/HenkiloMap' render={(props2) => <HenkiloMap {...props2} Taulukko = {Taulukko} /> } />
            <Route path='/GridJaCard' render={(props3) => <GridJaCard {...props3} data = {data} /> } />
            <Route path='/Listaa' component={ DrawerMUI } />
        </Switch></div>*/


    return (
        <BrowserRouter>
        <div>
            <h1>Kaikki kyselyt</h1>
            {kyselyt.map(kysely =>
            
                <table>
                    <tr>
                        <td><h3>{kysely.nimi}</h3></td>
                        <td><Button><Link to="/vastaa">VASTAA</Link></Button></td>
                        <td><Button><Link to="/tulokset">TULOKSET</Link></Button></td>
                   
                    </tr>
                    <Switch>
                        
                        <Route path="/vastaa" render={(props) => <haeKysely {...props} kysely_id={kysely.kysely_id}></haeKysely>}></Route>
                        <Route path="/tulokset" component={Tulosraportti}></Route>
                    
                    </Switch>
   

                    
                </table>
               
            )}
            
        </div>
        </BrowserRouter>
    )

}

export default KyselyLista;