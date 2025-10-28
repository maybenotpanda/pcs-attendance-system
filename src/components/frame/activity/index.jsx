// ** React Imports
import React from 'react'

// ** Icon Imports
import { LuClock8, LuClock6 } from 'react-icons/lu'
import { PiClockClockwiseBold } from 'react-icons/pi'

const Activity = (props) => {
	// ! props
	const { checkIn, working, checkOut } = props
	
	return (
		<div className="flex justify-between">
			<div className="grid gap-1 justify-items-center">
				<LuClock8 className="text-4xl text-primary" />
				<h6 className="font-semibold">{checkIn}</h6>
				<p>Check In</p>
			</div>
			<div className="grid gap-1 justify-items-center">
				<PiClockClockwiseBold className="text-4xl text-primary" />
				<h6 className="font-semibold text-primary">{working}</h6>
				<p>Working Hours</p>
			</div>
			<div className="grid gap-1 justify-items-center">
				<LuClock6 className="text-4xl text-primary" />
				<h6 className="font-semibold">{checkOut}</h6>
				<p>Check Out</p>
			</div>
		</div>
	)
}

export default Activity
