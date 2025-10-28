// ** React Imports
import React from 'react'

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
	return (
		<div className="w-screen flex justify-center items-start">
			<Layouts>
				<Greeting />
				<CardProfile />
				<h5 className="font-semibold">Today's Activity</h5>
				<Activity />
				<h5 className="font-semibold">PCS News</h5>
				<NewsCarousel data={News} />
				<h5 className="font-semibold">Online</h5>
				<UserList />
			</Layouts>
		</div>
	)
}

export default HomePage
