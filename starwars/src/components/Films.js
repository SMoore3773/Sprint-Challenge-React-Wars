import React, {useState, useEffect,} from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Films = props => {
    const [films, setFilms] = useState()
    useEffect(()=>{
        axios
        .get(props.filmsList)
        .then(res=>{
            setFilms(res.data.title)
        })
        .catch(err =>{
            console.log('error:',err)
        })
    },[])
    const FilmBox = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;

    `
    const FilmLink = styled.li`
    margin: 2px;
    padding: 2px;
    
    `
    
    return(
        <FilmBox>

            <FilmLink>{films}</FilmLink>

        </FilmBox>
    )
}
export default Films;