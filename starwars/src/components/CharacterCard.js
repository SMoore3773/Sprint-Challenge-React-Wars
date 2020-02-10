import React, {useState, useEffect,} from 'react';
import styled from 'styled-components';
import Homeworld from './Homeworld'
import Films from './Films'
const CharacterCard = props => {
 const CharCard = styled.div`
 display: flex;
 flex-direction:column;
 border-radius:10px;
 margin:5px;
 padding:5px;
 background-color: rgba(255,255,255,.5);
 box-shadow: 1px 1px 10px black;
 width:40%;
 text-align:center;
 `
 const CharName = styled.h2`
 font-size: 30px;
 `
    return (
            <CharCard>
                <CharName>{props.name}</CharName>
                <Homeworld 
                key = {props.id}
                home = {props.homeworld}
                />
                <p>Birth Year: {props.birthYear}</p>
                <p>Height: {props.height}cm</p>
                <p>Weight: {props.weight}Kg</p>
                <h4>Appeared In</h4>
                {props.films.map((item,index)=>{
                    return <Films key={index} filmsList={item}/>
                })}
            </CharCard>

        
    );
}

export default CharacterCard;