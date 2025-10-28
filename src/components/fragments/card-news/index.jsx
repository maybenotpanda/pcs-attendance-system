// ** React Imports
import React from 'react'

// / ** Elements Imports
import News from 'components/elements/news'

const CardNews = (props) => {
	// ! props
	const { name, date, image, description } = props

	return (
		<div className="rounded-lg p-4 grid gap-4 shadow-lg w-full bg-white">
			<News name={name} date={date} image={image} description={description} />
		</div>
	)
}

export default CardNews
