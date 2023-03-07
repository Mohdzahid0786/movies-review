import React from 'react'

const Movies = (props) => {
    return (
        <div className='movie'>
            <img src={props.poster} alt="logo" />
            <p>{props.title}</p>
            <p>Year: {props.year}</p>
        </div>
    )
}

export default Movies