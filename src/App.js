import React, { useState, useEffect } from 'react';
//import KyselyLista from './components/KyselyLista';

import HaeKysely from './components/HaeKysely';
import Tulosraportti from './components/Tulosraportti';
import { Button } from '@material-ui/core';
//import { Link } from 'react-router';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

function App() {


  const [kyselyt, setKyselyt] = useState([])

  const [nakyma, setNakyma] = useState("etusivu")
  const [kyselyid, setKyselyid] = useState('')

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

  const Etusivu = () => {
    return (
      <div>
        <h1>Kaikki kyselyt</h1>
        {kyselyt.map(kysely =>
          <div>
            <h3>{kysely.nimi}</h3>
            <Button onClick={() => handleVastaa(kysely.kysely_id)}>VASTAA</Button>
            <Button onClick={() => handleTulokset(kysely.kysely_id)}>TULOKSET</Button>
          </div>
        )}
      </div>

    )
  }

  const handleVastaa = (id) => {
    setNakyma("vastaussivu")
    setKyselyid(id)
    console.log("HANDLEVASTAA", nakyma)
    //setNaytaVastaa(!naytaVastaa)
    //setNaytaValikko(!naytaValikko)

  }

  const handleTulokset = (id) => {
    setNakyma("tulossivu")
    setKyselyid(id)
    console.log("HANDLE TULOKSET", nakyma)
    //setNaytaTulokset(!setNaytaTulokset)
    //setNaytaValikko(!naytaValikko)

  }

  const handleEtusivu = () => {
    setNakyma("etusivu")
    setKyselyid('')
    console.log("HANDLE etusivu", nakyma)
  }

  if (nakyma === "etusivu") {
    return (
      <Etusivu></Etusivu>
    )

  } else if (nakyma === "tulossivu") {
    return (
      <div>
      <Tulosraportti kysely_id={kyselyid}></Tulosraportti>
      <button onClick={()=>handleEtusivu()}>palaa etusivulle</button>
      </div>
    )

  } else if (nakyma === "vastaussivu") {
    return (
      <div>
      <HaeKysely kysely_id={kyselyid}></HaeKysely>
      <button onClick={()=>handleEtusivu()}>palaa etusivulle</button>
      </div>

    )

  }



  /* return (
 
     <div>
       <h1>Kaikki kyselyt</h1>
       {kyselyt.map(kysely =>
         <div>
           <h3>{kysely.nimi}</h3>
           <Button onClick={handleVastaa}>VASTAA</Button>
           <Button onClick={handleTulokset}>TULOKSET</Button>
         </div>
       )}
 
     </div>
     )*/


  //________________________________________
  /* <BrowserRouter>
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
 
             <Route path="/vastaa" render={(props) => <HaeKysely {...props} kysely_id={kysely.kysely_id}></HaeKysely>}></Route>
             <Route path="/tulokset" render={(props) => <Tulosraportti {...props} kysely_id={kysely.kysely_id}></Tulosraportti>}></Route>
 
           </Switch>
 
 
 
         </table>
 
       )}
 
     </div>
 
   </BrowserRouter>*/



}


export default App;
