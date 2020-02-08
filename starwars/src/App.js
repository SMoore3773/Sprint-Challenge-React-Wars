import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import styled from 'styled-components'
import PersonButtons from './components/PersonButtons'

const App = () => {
  const [charList, setCharList] = useState();
  const [person, setPerson] = useState(1)
  const [personProf, setPersonProf] = useState({})
//   useEffect(() => {
//     axios
//         .get(`https://swapi.co/api/people/${person}`)
//         .then(response =>{

//           // console.log(response.data);
//           setPersonProf(response.data);
          
//         })
//         .catch(err => {
//             console.log('Error:', err);
//         });

// }, [person])
useEffect(() => {
  axios
      .get(`https://swapi.co/api/people/`)
      .then(response =>{

        console.log(response.data.results[0].url);
        setCharList(response.data.results);
        
      })
      .catch(err => {
          console.log('Error:', err);
      });

},[])

  const App = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const CardBox = styled.div`
  display:flex;
  flex-direction: row;
  flex-flow:wrap;
  `
const CharacterCard = styled.div`
width: 45%;
`
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
console.log(charList);
  return (
    <App>
      <Header />
      <PersonButtons 
      key = {person.id}
      person = {person}
      setPerson = {setPerson}
      />
      
      <CardBox>


        {/* {charList.map(char => (
          
          <CharacterCard 
            key = {char.id}
            url = {char.url} 
          />
        ))}  */}
        
        </CardBox>




        {/* {charList.map(personProf =>{
            
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
          /> */}


        
      

        {/* {
        Object.keys(charList).forEach(key =>{
          const charByKey = personProf[key];


          charByKey.map(per =>(

            <CharacterCard 
            key={per.id}
            name = {per.name}
            homeworld = {per.homeworld}
            species = {per.species}
            birthYear = {per.birth_year}
            gender = {per.gender}
            height = {per.height}
            mass = {per.mass}
            films = {per.films}
            />
  
          ))
        })
        
      } */}


      {/* {charList.forEach(i =>{
        
        const [personProf, setPersonProf] = useState({})
        useEffect(() => {
          axios
              .get(`https://swapi.co/api/people/${i}`)
              .then(response =>{
      
                // console.log(response.data);
                setPersonProf(response.data);
                
              })
              .catch(err => {
                  console.log('Error:', err);
              });
      
      }, [person])



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
      })} */}

      
      {/* <CharacterCard 
      key={personProf.id}
      name = {personProf.name}
      homeworld = {personProf.homeworld}
      species = {personProf.species}
      birthYear = {personProf.birth_year}
      gender = {personProf.gender}
      height = {personProf.height}
      mass = {personProf.mass}
      films = {personProf.films}
      /> */}

    </App>
  );
}

export default App;
