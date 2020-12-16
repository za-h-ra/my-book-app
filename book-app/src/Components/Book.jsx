import React from 'react'

export default function Book(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.img} />
            <p>{props.description}</p>
        </div>
    )
}
