import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
	background-color: red;
	display: flex;
	align-items: center;
    justify-content: flex-end;
    padding: 20px;
`

const Heading = styled.h1`
    display: flex;
    margin: 0 auto 0 5px;
`

const NavList = styled.div`
    display: flex;
    justify-content: space-around;
`

const List = styled.li`
	list-style-type: none;
	font-weight: bold;
	font-size: 20px;
	margin: 0 10px;
`

export default function Header() {
	return (
		<Nav>
			<Heading>Book App</Heading>
			<NavList>
				<List>Home</List>
				<List>Books</List>
				<List>About</List>
			</NavList>
		</Nav>
	)
}
