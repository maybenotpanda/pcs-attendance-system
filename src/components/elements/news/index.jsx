// ** React Imports
import React, { Fragment } from 'react'

const News = (props) => {
	// ! props
	const { name, date, image, description } = props

	return (
		<Fragment>
			<div className="flex justify-between items-center w-full">
				<div className="flex items-center gap-2">
					<img src={image} className="rounded-full w-9 h-9" alt={name} />
					<p className="text-primary font-bold">{name}</p>
				</div>
				<div className="grid text-right">
					<span>Jumat</span>
					<span>{date}</span>
				</div>
			</div>
			<p>{description}</p>
		</Fragment>
	)
}

export default News
