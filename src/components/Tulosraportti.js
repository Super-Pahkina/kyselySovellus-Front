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
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    Header: {
        
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
                                console.log(expandedId)
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
                                            
                                        <CardContent className={classes.content}> 
                                        <div>
                                        {vastaus.checkbox.map(valinta => 
                                        <CardContent className={classes.content}> 
                                            <Typography>{valinta}</Typography>
                                        </CardContent>
                                            )}
                                        </div>
                                        </CardContent>
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