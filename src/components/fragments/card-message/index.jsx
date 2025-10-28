// ** React Imports
import React from 'react'

// ** Elements Imports
import Message from 'components/elements/message'

const CardMessage = (props) => {
	// ! props
	const { title, type, description, status, date, read } = props

	return (
		<div className={`${read ? 'bg-information-30' : 'hover:bg-information-10 '} p-4`}>
			<Message title={title} type={type} description={description} status={status} date={date} />
		</div>
	)
}

export default CardMessage
