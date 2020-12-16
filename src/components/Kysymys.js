import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

function Kysymys({ kysymys, value, handleSubmit, handleVastausChange, handleCheckboxChange, handleRadionappulaChange, handleSlider }) {

    const [arvo, setArvo] = useState('');

    const valit = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 1,
          label: '1',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 4,
          label: '4',
        },
        {
          value: 5,
          label: '5',
        },
      ];

// kaikki kysymykset form -> lähetetään tietokantaan kun painetaan "Jatka"
      const muutaArvo = (event, newValue) => {
          setArvo(newValue);
          console.log(arvo)
      }

    if (kysymys.tyyppi === "teksti") {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <p></p>{kysymys.teksti} <br></br>
                    <textarea
                        id="text"
                        type="text"
                        value={value}
                        onChange={handleVastausChange}
                    ></textarea> <br></br> 
                    <button type="submit">JATKA</button>
                </form>
            </div >

        )
    } else if (kysymys.tyyppi === "checkbox") {
        return (
            <div name ="checkbox">
                <form onSubmit={handleSubmit}>

                    <p></p>{kysymys.teksti} <br></br>
                    {kysymys.monivalinta.map((m, i) =>
                        <label key={i + 100}>
                            <input key={m}  type="checkbox" id={i+100} name="checkbox" value={m} onChange={handleCheckboxChange}></input>
                            {m}<br></br>
                        </label>
                    )}
                    <button type="submit">JATKA</button>
                </form>
            </div>
        )

    } else if (kysymys.tyyppi === "radionappula") {
        return (
            <div name = "radio">
                <form onSubmit={handleSubmit}>
                    <p></p>{kysymys.teksti} <br></br>
                    {kysymys.monivalinta.map((m, i) =>
                        <label key={i}>
                            <input  key={m}  type="radio" id={m} name="radionappula" value={m} onChange={handleRadionappulaChange}></input>
                            {m}<br></br>
                        </label>
                    )}
                    <button type="submit">JATKA</button>
                </form>
            </div>
        )
    } else if (kysymys.tyyppi === "skaala") {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <p></p>{kysymys.teksti} <br></br>
                    <Slider
                    defaultValue={1}
                    aria-labelledby="discrete-skaala-slider"
                    step={1}
                    min={0}
                    max={5}
                    valueLabelDisplay="auto"
                    marks = {valit}
                    onChange={handleVastausChange}
                    /><br></br> 
                    <button type="submit">JATKA</button>
                </form>
            </div >

        )
    }
}

export default Kysymys;