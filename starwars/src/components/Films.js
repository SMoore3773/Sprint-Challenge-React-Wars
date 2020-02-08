import React, {useState, useEffect,} from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Films = props => {
    // console.log(props);
    Object.keys(props).forEach(key =>{
        const filmByKey = props[key]
        // console.log(filmByKey)
        
    })
    // function nameGet(url){
    //     useEffect(() => {
    //         axios
    //         .get(url)
    //         .then(response => {

    //         })
    //     })
    // }
    const FilmBox = styled.ul`
    display: flex;
    flex-direction: column;
    `
    const FilmLink = styled.a`
    margin: 10px;
    padding: 20px;
    `
    
    return(
        <FilmBox>
            <FilmLink></FilmLink>

        </FilmBox>
    )
}
export default Films;