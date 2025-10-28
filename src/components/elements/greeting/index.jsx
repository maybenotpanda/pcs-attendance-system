// ** React Imports
import React from 'react'

const Greeting = () => {
	const hour = new Date().getHours()
	let greetingText = ''

	if (hour >= 5 && hour < 12) {
		greetingText = 'Hi, Good Morning!'
	} else if (hour >= 12 && hour < 15) {
		greetingText = 'Hi, Good Afternoon!'
	} else if (hour >= 15 && hour < 18) {
		greetingText = 'Hi, Good Evening!'
	} else {
		greetingText = 'Hi, Good Night!'
	}

	return <h5>{greetingText}</h5>
}

export default Greeting
