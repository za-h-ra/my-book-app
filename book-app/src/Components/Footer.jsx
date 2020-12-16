import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
	background-color: #ffc75e;
	width: 100%;
	height: 50px;
	positon: fixed;
	bottom: 0;
	box-shadow: 0px 0px 10px rgb(158, 158, 158);
	z-index: -2;
`

export default function Footer() {
    return (
        <FooterContainer>
        </FooterContainer>
    )
}
