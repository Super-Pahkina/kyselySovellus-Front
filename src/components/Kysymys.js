import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    form: {
        width: 400,
    },

}));

function Kysymys({ kysymys, value, handleSubmit, handleVastausChange, handleCheckboxChange, handleRadionappulaChange, handleSlider }) {

    const classes = useStyles();

    const valit = [
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
                <form onSubmit={handleSubmit} className={classes.form}>
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
                <Paper style={ {padding:'10px', margin:'30px', width:'600px'} }>
                <form onSubmit={handleSubmit}>
                    <p></p>{kysymys.teksti} <br></br>
                    
                    <Slider
                    defaultValue={1}
                    aria-labelledby="discrete-skaala-slider"
                    step={1}
                    min={1}
                    max={5}
                    valueLabelDisplay="auto"
                    marks = {valit}
                    onChange={handleVastausChange}
                    /><br></br> 
                    <button type="submit">JATKA</button>
                </form>
                </Paper>
            </div >

        )
    }


}

export default Kysymys;