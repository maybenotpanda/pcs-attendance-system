// ** React Imports
import React from 'react'

// ** Utils Imports
import { Each } from 'config/utils/each'

// ** Fragments Imports
import CardMessage from 'components/fragments/card-message'

const MessageList = (props) => {
	// ! props
	const { data } = props
	
	return (
		<div className="grid">
			<Each
				of={data}
				render={(item) => (
					<CardMessage
						key={item.id}
						title={item.title}
						date={item.date}
						status={item.status}
						type={item.type}
						description={item.description}
						read={item.read}
					/>
				)}
			/>
		</div>
	)
}

export default MessageList
