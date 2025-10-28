// ** React Imports
import React, { useState } from 'react'

// ** Frame Imports
import Layouts from 'components/frame/layouts'
import Activity from 'components/frame/activity'
import NewsCarousel from 'components/frame/news-carousels'
import UserList from 'components/frame/user-list'

// ** Elements Imports
import CardProfile from 'components/elements/card-profile'
import Greeting from 'components/elements/greeting'

// ** Assets Imports
import News from 'assets/data/news.json'

const HomePage = () => {
	// ! hooks
	// * state
	const [checkInTime, setCheckInTime] = useState(null)
	const [checkOutTime, setCheckOutTime] = useState(null)

	const formatTime = (date) => {
		if (!date) return '--:--'
		const hours = String(date.getHours()).padStart(2, '0')
		const minutes = String(date.getMinutes()).padStart(2, '0')
		return `${hours}:${minutes}`
	}

	const getWorkingHours = () => {
		if (!checkInTime || !checkOutTime) return '--:--:--'
		const diff = (checkOutTime - checkInTime) / 1000
		const h = Math.floor(diff / 3600)
			.toString()
			.padStart(2, '0')
		const m = Math.floor((diff % 3600) / 60)
			.toString()
			.padStart(2, '0')
		const s = Math.floor(diff % 60)
			.toString()
			.padStart(2, '0')
		return `${h}:${m}:${s}`
	}

	return (
		<div className="w-screen flex justify-center items-start">
			<Layouts
				runCheckIn={() => {
					if (!checkInTime) setCheckInTime(new Date())
				}}
				runCheckOut={() => {
					if (checkInTime && !checkOutTime) setCheckOutTime(new Date())
				}}
				checkIn={checkInTime}
				checkOut={checkOutTime}
				reset={() => {
					setCheckInTime(null)
					setCheckOutTime(null)
				}}>
				<Greeting />
				<CardProfile />
				<h5 className="font-semibold">Today's Activity</h5>
				<Activity checkIn={formatTime(checkInTime)} working={getWorkingHours()} checkOut={formatTime(checkOutTime)} />
				<h5 className="font-semibold">PCS News</h5>
				<NewsCarousel data={News} />
				<h5 className="font-semibold">Online</h5>
				<UserList />
			</Layouts>
		</div>
	)
}

export default HomePage
