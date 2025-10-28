import React from 'react'
import { FaHouse, FaCalendarCheck, FaFileLines, FaGear, FaDoorOpen } from 'react-icons/fa6'

const Footer = () => {
	return (
		<div className="fixed bottom-0 w-full md:w-1/2 bg-white py-3 shadow-xl flex justify-between container px-4 items-end">
			<div className="grid justify-items-center gap-2 text-primary">
				<FaHouse className="text-2xl" />
				<span className="font-semibold">Home</span>
			</div>
			<div className="grid justify-items-center gap-2 text-gray-400">
				<FaCalendarCheck className="text-2xl" />
				<span>Attendance</span>
			</div>
			<div className="grid justify-items-center gap-2 ">
				<div className="bg-primary p-4 rounded-full shadow-xl">
					<FaDoorOpen className="text-2xl text-white " />
				</div>
				<span className="font-semibold text-primary">Check Out</span>
			</div>
			<div className="grid justify-items-center gap-2 text-gray-400">
				<FaFileLines className="text-2xl" />
				<span>Form</span>
			</div>
			<div className="grid justify-items-center gap-2 text-gray-400">
				<FaGear className="text-2xl" />
				<span>Setting</span>
			</div>
		</div>
	)
}

export default Footer
