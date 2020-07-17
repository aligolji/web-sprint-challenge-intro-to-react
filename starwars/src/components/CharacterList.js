import React from 'react';
import Character from './Character';

const CharacterList = props => {
   

        const { characters } = props
            console.log(characters)

    return (
        <div className='characters-container'>
            {/* {
                characters.map(character => {
                    console.log(character)
                    return <Character key={character.id} character={character} />
                })
            } */}

        </div>

    );
};

export default CharacterList;