import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import styled from 'styled-components'
import PersonButtons from './components/PersonButtons'

const App = () => {
  const [charList, setCharList] = useState([]);
  const [person, setPerson] = useState(1)
  const [personProf, setPersonProf] = useState({})
  useEffect(() => {
    axios
        .get(`https://swapi.co/api/people/${person}`)
        .then(response =>{

          console.log(response.data);
          setPersonProf(response.data);
          

          
        })
        .catch(err => {
            console.log('Error:', err);
        });

}, [person])

  const App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <App className="App">
      <Header />
      <PersonButtons 
      key = {person.id}
      person = {person}
      setPerson = {setPerson}
      
      />
      <CharacterCard 
      key={personProf.id}
      name = {personProf.name}
      homeworld = {personProf.homeworld}
      species = {personProf.species}
      birthYear = {personProf.birth_year}
      gender = {personProf.gender}
      height = {personProf.height}
      mass = {personProf.mass}
      films = {personProf.films}



      />

    </App>
  );
}

export default App;
