import React, {useState, useEffect,} from 'react';
import axios from 'axios';

const Homeworld = props =>{

const [hw, setHw] = useState('')
useEffect(()=>{
    axios
    .get(props.home)
    .then(res=>{
        // console.log(res.data)
        setHw(res.data.name)
    })
    .catch(err=>{
        console.log('error:',err)
    })
},[])
    return(
        <h3>Homeworld: {hw}</h3>
    )
}
export default Homeworld