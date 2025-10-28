// ** React Imports
import React, { useState } from 'react'

// ** Fragments Imports
import CardNews from 'components/fragments/card-news'

const NewsCarousel = (props) => {
	// ! props
	const { data } = props

	// ! hooks
	// * state
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="overflow-hidden">
				<div className="transition-transform duration-500 m-4">
					<CardNews
						image={data[currentIndex].image}
						name={data[currentIndex].name}
						date={data[currentIndex].date}
						description={data[currentIndex].description}
					/>
				</div>
			</div>
			<div className="flex justify-center mt-2 space-x-2">
				{data.map((_, index) => (
					<span
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}></span>
				))}
			</div>
		</div>
	)
}

export default NewsCarousel
