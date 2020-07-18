import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;


`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const axiosData = 'https://swapi.dev/api/people/';

  useEffect(() => {
    axios.get(axiosData)
      .then(response => {
        setCharacters(response.data.results)
      })    
        
      .catch(error => {
      })
      
  }, []);

  // console.log(characters)

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => {
          return <Character key={character.id} info={character} />
        })
      }
    </StyledApp>
  );
}

console.log('still working?')

export default App;
