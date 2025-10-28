// ** React Imports
import React from 'react'

// ** Frame Imports
import Layouts from 'components/frame/layouts'
import MessageList from 'components/frame/message-list'

// ** Assets Imports
import Data from 'assets/data/notifications.json'

const Notification = () => {
	return (
		<div className="flex justify-center items-start">
			<Layouts>
				<MessageList data={Data} />
			</Layouts>
		</div>
	)
}

export default Notification
