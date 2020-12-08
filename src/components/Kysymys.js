import React from 'react';

// palauttaa yhden kysymyksen
// kysymyspohja valitaan kysymykselle asetetun tyypin mukaan
function Kysymys({ kysymys, value, handleSubmit, handleVastausChange, handleCheckboxChange, handleRadionappulaChange }) {

// kaikki kysymykset form -> lähetetään palvelimelle kun painetaan "Jatka"
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
            <div>
                <form onSubmit={handleSubmit}>

                    <p></p>{kysymys.teksti} <br></br>
                    {kysymys.monivalinta.map((m, i) =>
                        <label key={i + 100}>
                            <input type="checkbox" id={i} name="checkbox" value={m} onClick={handleCheckboxChange}></input>
                            {m}<br></br>
                        </label>
                    )}
                    <button type="submit">JATKA</button>
                </form>
            </div>
        )

    } else if (kysymys.tyyppi === "radionappula") {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <p></p>{kysymys.teksti} <br></br>
                    {kysymys.monivalinta.map((m, i) =>
                        <label key={i}>
                            <input type="radio" id={m} name="radionappula" value={m} onClick={handleRadionappulaChange}></input>
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
