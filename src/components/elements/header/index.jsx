// ** React Imports
import React from 'react'
import { useNavigate } from 'react-router-dom'

// ** Icons Imports
import { IoIosNotificationsOutline } from 'react-icons/io'

const Header = () => {
	// ! navigae
	const navigate = useNavigate()
	return (
		<div className="flex justify-between w-full items-center mt-6">
			<h2 className="text-primary font-bold">KerjaYuk!</h2>
			<IoIosNotificationsOutline
				className="text-2xl"
				onClick={() => {
					navigate('/notifications')
				}}
			/>
		</div>
	)
}

export default Header
