import React from 'react';

function Kysymys({ kysymys, value, handleSubmit, handleVastausChange, handleCheckboxChange, handleRadionappulaChange }) {

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
    }

}

export default Kysymys;
