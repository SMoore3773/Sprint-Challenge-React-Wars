import React, {useState, useEffect,} from 'react';
import styled from 'styled-components';
import Films from './Films';
import axios from 'axios';

const CharacterCard = props => {
const [hw, setHw] = useState()
const [spe, setSpe] = useState()
    useEffect(() => {
    axios
    .get(props.homeworld)
    .then(response =>{
        // console.log(response.data) 
        setHw(response.data.name);  
    })
    .catch(err => {console.log('Error:', err);});
    }, [])
    useEffect(() => {
        axios
        .get(props.species)
        .then(response =>{
            // console.log(response.data) 
            setSpe(response.data.name);  
        })
        .catch(err => {console.log('Error:', err);});
        }, [])


    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{hw}</h4>
            <p>Species: {spe}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>{props.gender}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}Kg</p>
            <Films 
            key = {props.id}
            films = {props.films}
            />
            

        </div>
    );
}

export default CharacterCard;