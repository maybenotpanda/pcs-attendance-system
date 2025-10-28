// ** React Imports
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// ** Icon Imports
import { FaHouse, FaCalendarCheck, FaFileLines, FaGear, FaDoorOpen } from 'react-icons/fa6'

const Footer = (props) => {
	const location = useLocation()
	const navigate = useNavigate()

	// ! props
	const { checkIn, checkOut, runCheckIn, runCheckOut, reset } = props

	return (
		<div className="fixed bottom-0 w-full md:w-1/2 bg-white py-3 shadow-xl flex justify-between container px-4 items-end">
			<div
				className={`cursor-pointer grid justify-items-center gap-2  ${
					location.pathname === '/' ? 'text-primary' : 'text-gray-400'
				} `}
				onClick={() => navigate('/')}>
				<FaHouse className="text-2xl" />
				<span className="font-semibold">Home</span>
			</div>
			<div
				className={`cursor-pointer grid justify-items-center gap-2  ${
					location.pathname === '/attendance' ? 'text-primary' : 'text-gray-400'
				}`}
				onClick={() => navigate('/attendance')}>
				<FaCalendarCheck className="text-2xl" />
				<span>Attendance</span>
			</div>
			<div
				className="cursor-pointer grid justify-items-center gap-2"
				onClick={() => {
					if (!checkIn) {
						runCheckIn()
					} else if (checkIn && !checkOut) {
						runCheckOut()
					} else if (checkIn && checkOut) {
						reset()
					}
				}}>
				<div className="bg-primary p-4 rounded-full shadow-xl">
					<FaDoorOpen className="text-2xl text-white " />
				</div>
				<span className="font-semibold text-primary">
					{!checkIn ? 'Check In' : checkIn && !checkOut ? 'Check Out' : 'Check In'}
				</span>
			</div>
			<div
				className={`cursor-pointer grid justify-items-center gap-2  ${
					location.pathname === '/form' ? 'text-primary' : 'text-gray-400'
				}`}
				onClick={() => navigate('/form')}>
				<FaFileLines className="text-2xl" />
				<span>Form</span>
			</div>
			<div
				className={`cursor-pointer grid justify-items-center gap-2  ${
					location.pathname === '/setting' ? 'text-primary' : 'text-gray-400'
				}`}
				onClick={() => navigate('/setting')}>
				<FaGear className="text-2xl" />
				<span>Setting</span>
			</div>
		</div>
	)
}

export default Footer
