import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'

import DogBox from './components/DogBox'
import CharacterCard from './components/CharacterCard'
import styled from 'styled-components'
import PersonButtons from './components/PersonButtons'

const App = () => {
  
  //styling
  const App = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const Box = styled.div`
  display:flex;
  flex-direction:row;
  flex-flow:wrap;
  justify-content:center;
  margin:20px;
  
  `
  
   
//state
  const [charList, setCharList] = useState([]);
  const[beagle, setBeagle]=useState([]);
//api pull
  useEffect(()=>{
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response =>{
        const chars = response.data.results;
        // console.log(response.data);
        setCharList(chars);
        console.log(chars);
        
      })
      .catch(err => {
          console.log('Error:', err);
      });
  },[]);
  useEffect(()=>{
    axios
    .get(`https://dog.ceo/api/breed/beagle/images/random/6`)
    .then(res=>{
      console.log(res.data.message)
      setBeagle(res.data.message)
    })
    .catch(err=>{
      console.log('error:',err)
    })
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <App>
      <Header />
      {/* <PersonButtons/> */}
       <Box >
        {charList.map((item,index)=> {
          return <CharacterCard key={index} name={item.name} homeworld ={item.homeworld} birthYear = {item.birth_year} height={item.height} weight={item.mass} films = {item.films}/>;
        })}
      </Box>
      <Box>
        {beagle.map((item,index)=>{
          return <DogBox key={index} img={item}/>
        })}

      </Box>
    </App>
  );
}

export default App;
