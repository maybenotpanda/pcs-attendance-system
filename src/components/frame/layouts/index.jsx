// ** React Imports
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// ** Icons Imports
import { HiArrowLeft } from 'react-icons/hi2'

// ** Fragments Imports
import Footer from 'components/fragments/footer'

// ** Elements Imports
import Header from 'components/elements/header'

const Layouts = ({ children, checkIn, checkOut, runCheckIn, runCheckOut, reset }) => {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<div className="w-screen md:w-1/2 ">
			{location.pathname === '/notifications' ? (
				<div className="relative w-full">
					<div className="sticky top-0 left-0 w-full bg-white py-4 px-4 shadow-xl flex items-center z-50">
						<HiArrowLeft className="font-semibold cursor-pointer hover:text-primary" onClick={() => navigate(-1)} />
						<h5 className="text-primary px-4 font-semibold">Notification</h5>
					</div>
					{children}
				</div>
			) : (
				<div className="container px-4 lg:px-0 grid gap-3 pb-28 relative">
					<Header />
					{children}
					<Footer checkIn={checkIn} checkOut={checkOut} runCheckIn={runCheckIn} runCheckOut={runCheckOut} reset={reset} />
				</div>
			)}
		</div>
	)
}

export default Layouts
