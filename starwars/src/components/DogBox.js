import React, {useState, useEffect,} from 'react';
import styled from 'styled-components';

import axios from 'axios';


const DogBox = props =>{

const DogPic = styled.img`
 display: flex;
 flex-direction:column;
 border-radius:10px;
 margin:5px;
 padding:5px;
 box-shadow: 1px 1px 10px black;
 width:40%;
 `
return (

    <DogPic src={props.img} alt='beagle picture'/>



)
}

export default DogBox