// // Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`
    .container {
        /* border: 2px solid blue; */
        display: flex;
        align-items: center;
        width: 80rem;
        height: 10rem;
        margin: 1.5rem;
        background-color: #A6A6A6;
        opacity: 0.65;
        border-radius: 1rem;
        box-shadow: 15Px 15px 10px #000000;
    }

    .nameDob {
        /* border: 2px solid red; */
        width: 22rem;
        text-align: left;
        padding: 1.2rem;
        height: 6rem;
        border-right: 2px solid #000000;

    }

    h2 {
        font-size: 2rem;
        color: red;
    }

    .nameDob span {
        font-size: 1.2rem;
    }

    .characterSpecs {
        /* border: 2px solid orange; */
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        flex-wrap: wrap;
        width: 70%;
        padding: .5rem;
        height: 8rem;
    }

    .characterSpecs span {
        /* border: 1px solid blue; */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 30%;
        letter-spacing: .15rem;
        font-size: 1.2rem;
    }

`
const StyledContainer = styled.div`

    :hover {
        @keyframes flip {
            0% {transform: none}
            50% {transform: scalex(-1)}
            100% {transform: none}

        }

        animation-name: flip;
        animation-duration: 10s;
        /* animation-delay: 3s; */
        animation-timing-function: ease-in-out;
    }    

`
//END STYLING

const Character = props => {
console.log(props)
// console.log(props.info.mass)
    return (
        <StyledCharacter className='character-card'>
            <StyledContainer className='container'>
                <div className='nameDob'>
                    <h2>{props.info.name}</h2>
                    <span>Year of Birth:  {props.info.birth_year}</span>
                </div>
                <div className='characterSpecs'>
                    <span>Eye Color:  {props.info.eye_color}</span>
                    <span>Height:  {props.info.height}</span>
                    <span>Mass:  {props.info.mass}</span>
                    <span>Hair Color:  {props.info.hair_color}</span>
                    <span>Skin Color:  {props.info.skin_color}</span>
                    <span>Gender:  {props.info.gender}</span>

                    {/*
                        Homeworld:  {props.info.homeworld}
                        Films:  {props.info.films}
                        Species:    {props.info.species}
                        Starships:  {props.info.starships}
                        Vehicles:   {props.info.vehicles}
                        these are arrays arrays... require get requests for more data to map and render
                    */}
                </div>                      
            </StyledContainer>
        </StyledCharacter>

    );
};

export default Character;

console.log('am i still working?')