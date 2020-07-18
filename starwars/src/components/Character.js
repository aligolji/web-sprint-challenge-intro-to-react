// // Write your Character component here
import React from 'react';

const Character = props => {
console.log(props)
// console.log(props.info.mass)
    return (
        <div className='character-card'>
            
            <div>
                <span>{props.info.name}</span>
                <span>Year of Birth:  {props.info.birth_year}</span>
            </div>
            <div>
                <span>Height: {props.info.height}</span>
                <span>Mass:   {props.info.mass}</span>
                <span>Hair Color: {props.info.hair_color}</span>
                <span>Skin Color: {props.info.skin_color}</span>
                <span>Eye Color:  {props.info.eye_color}</span>
                <span>Gender: {props.info.gender}</span>
                {/*
                    homeworld
                    films
                    species
                    starships
                    vehicles
                    these are arrays arrays... require get request for more data
                */}
            </div>                      

        </div>

    );
};

export default Character;

console.log('am i still working?')