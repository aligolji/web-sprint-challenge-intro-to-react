// // Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`

    .container {
        border: 2px solid blue;
        display: flex;
        width: 30rem;
        margin: 1.5rem;
    }

    h2 {
        color: red;
    }

    .nameDob {
        border: 1px solid green;
    }

    .characterSpecs {
        border: 2px solid orange;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`










const Character = props => {
console.log(props)
// console.log(props.info.mass)
    return (
        <StyledCharacter className='character-card'>
            <div className='container'>
            <div className='nameDob'>
                <h2>{props.info.name}</h2>
                <span>Year of Birth:  {props.info.birth_year}</span>
            </div>
            <div className='characterSpecs'>
                <span>Height: {props.info.height}</span>
                <span>Mass:   {props.info.mass}</span>
                <span>Hair Color: {props.info.hair_color}</span>
                <span>Skin Color: {props.info.skin_color}</span>
                <span>Eye Color:  {props.info.eye_color}</span>
                <span>Gender: {props.info.gender}</span>
                {/*
                    Homeworld:  {props.info.homeworld}
                    Films:  {props.info.films}
                    Species:    {props.info.species}
                    Starships:  {props.info.starships}
                    Vehicles:   {props.info.vehicles}
                    these are arrays arrays... require get request for more data and mapping
                */}
            </div>                      
            </div>
        </StyledCharacter>

    );
};

export default Character;

console.log('am i still working?')