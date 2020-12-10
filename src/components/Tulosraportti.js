import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";


const useStyles = makeStyles((theme) => ({
    Header: {
        
    },

    button: {
        padding: 10,
        background: 'white',
        margin: 5,
        color: 'black',
        boxShadow: '0 5px 10px 5px rgba(100, 1, 100, .3)',
        '&:hover': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)',

            color: '#FFF'
        }
    },

    Chart: {
        maxHeight: 300,
        maxWidth: 300
    },

/*    Kysely: {
        position: "-webkit-sticky",
        position: "sticky",
        top: 0,
        backgroundColor: "#FFFFFF"
    },
*/
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest
        })
    },

    expandOpen: {
        transform: 'rotate(180deg)'
    },
}));


function Tulosraportti(props) {
    const classes = useStyles();
    const [kysely_id, setKysely_id] = useState(props.kysely_id)
    const [data, setData] = useState([])
    const [expandedId, setExpandedId] = React.useState(-1);
    const [kysely, setKysely] = useState('');
    let otsikko = 0;
    let i = 0;

    const [kysymysLista, setKysymyslista] = useState([])

    const vastaus_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kysely_id}/vastaukset`
    const kysymys_url = `http://kyselysovellus.herokuapp.com/kyselyt/${kysely_id}/kysymykset`

    useEffect(() => { fetchData() }, []);

    const fetchData = () => {

        axios.get(vastaus_url)
            .then(response => setData(response.data))

        axios.get(kysymys_url)
            .then(response => setKysymyslista(response.data))
            
        
        console.log("LISTA", JSON.stringify(kysymysLista[0]))
        console.log("DATA", data)
    }

    const handleChange = (index) => {
        setExpandedId(expandedId === index ? -1 : index);
    };

    const mapF = () => {
        let j = 0;
        let a = 0;
        let i = 0;
        let b = 0;
        let c = 0;
        let onko = false;
        let monivalinta = ({nimi: [], määrä: []});
        while (i < data.length) {
            if (data[i].checkbox.length > 0){
                while (b < data[i].kysymys.monivalinta.length){
                    monivalinta.nimi.push(data[i].kysymys.monivalinta[b]);
                    monivalinta.määrä.push(0);
                    b = b + 1;
                }
            }
        while (j < data[i].checkbox.length){
            while (a < monivalinta.nimi.length){
                if (data[i].checkbox[j] === monivalinta.nimi[a]){
                    onko = true;
                    monivalinta.määrä[a] = monivalinta.määrä[a] + 1
                }
                a = a + 1;
            }
            if (!onko){
                monivalinta.nimi.push(data[i].checkbox[j]);
                monivalinta.määrä.push(1);
            }
            onko = false;
            a = 0;
            j = j + 1;
        }
        j = 0; 
        
        i = i + 1;
    }

        const mappi = new Array();
        for (i = 0; i < monivalinta.nimi.length; i++){
            var sarake = {nimi: monivalinta.nimi[i], määrä: monivalinta.määrä[i]};
            mappi.push(sarake);
        }
        return mappi;
    };


    return (
        <div>
           <p></p>
            
            
            <Grid container 
                direction="column"
                spacing={1} 
                className={classes.grid}>
            {kysymysLista.map((kysymys, index) =>
            <>
            {otsikko === 0 ? 
            <Grid item key={ index } className={classes.Kysely}>
                <h1>{kysymysLista[0].kysely.nimi}</h1>
                <h2>{kysymysLista[0].kysely.kuvaus}</h2>
                <h2>vastaukset:</h2>
                <Button className={classes.button} a href='/Etusivu'>Palaa etusivulle</Button>
                <span style={{display:'none'}}>{otsikko = 1}</span>
            </Grid>
            : 
            <></>
            }
            <Grid item key={ index } className={classes.gridItem}>
                    
                <div>
                    <Card>
                    <CardHeader className={classes.Header}
                    title={kysymys.teksti}
                    />
                    {data.map((vastaus, indeksi) => {
                        
                        
                        if (vastaus.kysymys.kysymys_id === kysymys.kysymys_id) {
                            i = i + 1;
                            if(vastaus.kysymys.tyyppi === "teksti" || vastaus.kysymys.tyyppi === "radionappula") {
                                return (
                                    <>
                                        
                                        {i === 1 ?
                                        <IconButton className={classes.Icon}
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expandedId === index,
                                            })}
                                            onClick={() => handleChange(index)}
                                            aria-expanded={expandedId === index}
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                        :
                                        <></>
                                        }
                                            
                                        <Collapse in={expandedId === index} >
                                            
                                        <CardContent className={classes.content}> 
                                            <Typography key={indeksi}>{i}: {vastaus.syote}</Typography>
                                        </CardContent>
                                        </Collapse>
                                    </>
                                )
                            } else{
                                return(
                                    <>
                                        
                                        {i === 1 ?
                                        <IconButton className={classes.Icon}
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expandedId === index,
                                            })}
                                            onClick={() => handleChange(index)}
                                            aria-expanded={expandedId === index}
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                        :
                                        <></>
                                        }
                                            
                                        <Collapse in={expandedId === index} >
                                        {i === 1 ? <CardContent className={classes.content}> 
                                        <div>
                                        <VictoryChart domainPadding={20}>
                                            <VictoryBar  style={{
                                            data: { fill: "#c43a31" }
                                            }} data={mapF()} x="nimi" y="määrä" 
                                            />
                                        </VictoryChart>
                                        </div>
                                        </CardContent>
                                        :
                                        <></>
                                        }
                                        </Collapse>
                                    </>
                                )

                            }
                           

                        }
                    }

                    )}
                    </Card>
                    <span style={{display:'none'}}>{i = 0}</span>
                </div>
                </Grid>
                </>
            )}
            
            </Grid>

        </div>
    )
}

export default Tulosraportti;

/*
{vastaus.checkbox.map(valinta => 
                                        <CardContent className={classes.content}> 
                                            <Typography>{valinta}</Typography>
                                        </CardContent>
                                            )}
                                            */

