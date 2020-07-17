// // Write your Character component here
import React from 'react';

const Character = props => {

    const {character} = props
    console.log(character)

    return (
        <div className='character-card'>
            <div className='basic-info'>
                <h2>{character.name}</h2>
                <span>Homeworld: + {'    '} + {character.homeworld}</span>
                <span>Birth Year: + {'    '} + {character.birth_year}</span>                
            </div>

            <div className='character-details'>
                <span>Height: + {'    '} + {character.height}</span>
                <span>Mass: + {'    '} + {character.mass}</span>
                <span>Hair Color: + {'    '} + {character.hair_color}</span>
                <span>Skin Color: + {'    '} + {character.skin_color}</span>
                <span>Eye Color: + {'    '} + {character.eye_color}</span>
                <span>Gender: + {'    '} + {character.gender}</span>
                <span>Films: + {'    '} + {character.films}</span>
                <span>Species: + {'    '} + {character.species}</span>
                <span>Vehicles: + {'    '} + {character.vehicles}</span>
                <span>Starships: + {'    '} + {character.starships}</span>
            </div>

        </div>

    );
};

export default Character;