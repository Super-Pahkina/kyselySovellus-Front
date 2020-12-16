import React, { useState } from 'react';
import HaeKysely from './components/HaeKysely';
import Tulosraportti from './components/Tulosraportti';
//import { Button } from '@material-ui/core';
import Etusivu from './components/Etusivu'

function App() {

  const [nakyma, setNakyma] = useState("etusivu")
  const [kyselyid, setKyselyid] = useState('')

  const handleVastaa = (id) => {
    setNakyma("vastaussivu")
    setKyselyid(id)
    console.log("HANDLEVASTAA", nakyma)

  }

  const handleTulokset = (id) => {
    setNakyma("tulossivu")
    setKyselyid(id)
    console.log("HANDLE TULOKSET", nakyma)

  }

  if (nakyma === "etusivu") {
    return (
      <Etusivu handleVastaa={handleVastaa} handleTulokset={handleTulokset}></Etusivu>
    )

  } else if (nakyma === "tulossivu") {
    return (
      <div>
        <Tulosraportti kysely_id={kyselyid}></Tulosraportti>
        
      </div>
    )

  } else if (nakyma === "vastaussivu") {
    return (
      <div>
        <HaeKysely kysely_id={kyselyid}></HaeKysely>
       
      </div>

    )

  }

}


export default App;
