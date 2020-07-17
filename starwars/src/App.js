import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CharacterList from './components/CharacterList';


console.log('test')
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState('');

console.log('test 2')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const axiosData = 'https://swapi.dev/api/people/';

console.log('test 3')
  useEffect(() => {
    axios.get(axiosData)
      .then(function (response) {
        setCharacter(response.data.results)
      
        console.log(response.data.results)
      }
    )


      .catch(function (error) {

          console.log(error)
        }
      )
      
  }, []);







  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { <CharacterList characters={character} /> }
    </div>
  );
}

export default App;
