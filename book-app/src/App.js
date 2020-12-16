import React from 'react'
import Header from './Components/Header'
import Book from './Components/Book'
import Footer from './Components/Footer'

export default function App() {
    return (
			<div>
				<Header />
				<Book
					title='Atomic Habits'
					img='https://target.scene7.com/is/image/Target/GUEST_22c193bf-5ae5-4e21-8454-a874afdcb9e3?wid=488&hei=488&fmt=pjpeg'
					description="No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
				/>
				<Book
					title='Trick Mirror'
					img='https://booksovermind.com/wp-content/uploads/2019/08/tm.jpeg'
				/>
				<Book title='Atomic Habits' />
				<Footer />
			</div>
		)
}
