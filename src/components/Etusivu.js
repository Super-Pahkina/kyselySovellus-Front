import React, { useState, useEffect } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Button, CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/Card';
const useStyles = makeStyles({
button: {
  padding: 10,
  background: 'white',
  margin: 5,
  color: 'blue',
  boxShadow: '0 5px 10px 5px rgba(100, 1, 100, .3)',
  '&:hover': {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)',
    
    color: '#FFF'
  }},
  button2: {
    padding: 10,
    background: 'white',
    color: 'red',
    boxShadow: '0 5px 10px 5px rgba(100, 1, 100, .3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)',
      
      color: '#FFF'
    }},
    card: {
      background: 'linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      marginLeft: 20
    },
    content: {
      background: 'white'
    },
    search: {
      textAlign: 'center',
      
    },
    h1: {
      textAlign: 'center'
      
    }

});

function Etusivu({handleVastaa, handleTulokset}){
    const classes = useStyles();
    const [kyselyt, setKyselyt] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    let kysely_url = 'http://kyselysovellus.herokuapp.com/kyselyt'

    const fetchData = () => {
      fetch(kysely_url)
        .then(Response => Response.json())
        .then(data => setKyselyt(data))

        const result = kyselyt.filter(kysely => kysely.piilotettu !== true)
        console.log("RESULT", JSON.stringify(result))
        setKyselyt(result);


    };
  
    useEffect(() => { fetchData(); }, []);

    return(
        <div>
        <h1 className = {classes.h1}>Kaikki kyselyt</h1>
       <p className = {classes.search}> <input 
             placeholder="Hae kysely"
             type="text"
             onChange={(event) => {
               setSearchTerm(event.target.value);
             }}
      /></p>
      
      <Grid container spacing ={4} style = {{marginTop:0.1, justifyContent:'center'}}>
        {kyselyt.filter((kysely)=>{
          if(searchTerm === '') {
            return kyselyt
          } else if(kysely.nimi.toLowerCase().includes(searchTerm.toLowerCase())) {
            return kyselyt
          }
          
        }).map(kysely =>{

        if(kysely.piilotettu) {
          return(
            <div></div>
          )
        }  
          
          return(
            
        <Grid item key = {kysely.kysely_id}>
          <Card className= {classes.card} style = { {marginTop: 10, maxWidth: 300, minWidth: 200}}>
            <CardHeader title = 'kysely'>
              <Typography align ='center'>{kysely.nimi}</Typography>
              </CardHeader>

            <CardContent >
            <Button className = {classes.button} onClick={() => handleVastaa(kysely.kysely_id)}>VASTAA</Button>
            <Button className = {classes.button2} onClick={() => handleTulokset(kysely.kysely_id)}>TULOKSET</Button>
            </CardContent>
            </Card>
            </Grid>
            
        )
        
        })}
      </Grid> </div>
    )
    
}

export default Etusivu;