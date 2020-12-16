import React from 'react'
import styled from 'styled-components'

const BookContainer = styled.div`
	border: 5px solid #ff9672;
	width: 60%;
	min-width: 300px;
	padding: 20px;
	margin: 20px;
	background-color: #ffc75e;
`

const BookTitle = styled.h1`
    text-align: center;
    font-size: 40px;
`

const BookContent = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const BookImage = styled.img`
    height: 300px;
    width: 200px;
`

const BookText = styled.p`
    margin: 40px;
    font-weight: bold;
`

export default function Book(props) {
	return (
		<BookContainer>
			<BookTitle>{props.title}</BookTitle>
			<BookContent>
				<BookImage src={props.img} />
				<BookText>{props.description}</BookText>
			</BookContent>
		</BookContainer>
	)
}
