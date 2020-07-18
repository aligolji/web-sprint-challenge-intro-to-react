import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

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
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => {
          return <Character key={character.id} info={character} />
        })
      }
    </div>
  );
}

console.log('still working?')

export default App;
