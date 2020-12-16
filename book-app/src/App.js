import React from 'react'
import Header from './Components/Header'
import Book from './Components/Book'
import Footer from './Components/Footer'
import styled from 'styled-components'

const MainContainer = styled.main`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    min-height: 100vh;
`

export default function App() {
	return (
		<>
			<Header />
			<MainContainer>
				<Book
					title='Atomic Habits'
					img='https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL.jpg'
					description="No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
				/>
				<Book
					title='Trick Mirror'
					img='https://images-na.ssl-images-amazon.com/images/I/61SvxK1biuL.jpg'
					description='Trick Mirror is an enlightening, unforgettable trip through the river of self-delusion that surges just beneath the surface of our lives. This is a book about the incentives that shape us, and about how hard it is to see ourselves clearly through a culture that revolves around the self. In each essay, Tolentino writes about a cultural prism: the rise of the nightmare social internet; the advent of scamming as the definitive millennial ethos; the literary heroine’s journey from brave to blank to bitter; the punitive dream of optimization, which insists that everything, including our bodies, should become more efficient and beautiful until we die. Gleaming with Tolentino’s sense of humor and capacity to elucidate the impossibly complex in an instant, and marked by her desire to treat the reader with profound honesty, Trick Mirror is an instant classic of the worst decade yet.'
				/>
				<Book
					title='Shoe Dog'
					img='https://prodimage.images-bn.com/pimages/9781501135927_p0_v4_s1200x630.jpg'
					description='Fresh out of business school, Phil Knight borrowed fifty dollars from his father and launched a company with one simple mission: import high-quality, low-cost running shoes from Japan. Selling the shoes from the trunk of his car in 1963, Knight grossed eight thousand dollars that first year. Today, Nike’s annual sales top $30 billion. In this age of start-ups, Knight’s Nike is the gold standard, and its swoosh is one of the few icons instantly recognized in every corner of the world.'
				/>
			</MainContainer>
			<Footer />
		</>
	)
}
