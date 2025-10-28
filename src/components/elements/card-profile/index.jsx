// ** React Imports
import React from 'react'

const CardProfile = () => {
	return (
		<div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-3 grid gap-4">
			<div className="flex justify-between items-start">
				<img
					src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
					className="rounded-full w-16 h-16"
				/>
				<div className="grid gap-1">
					<p className="text-white font-semibold">Duck</p>
					<span className="text-white italic font-thin">Frontend Developer</span>
				</div>
				<div className="grid gap-1">
					<span className="text-white italic font-thin">Member Since</span>
					<p className="text-white font-semibold">05 Mei 2025</p>
				</div>
			</div>
			<div className="flex justify-between items-end">
				<div className="grid gap-1">
					<span className="text-white italic">Location</span>
					<p className="text-white font-semibold">Kantor Sahid</p>
				</div>
				<span className="text-white italic font-thin">ICO</span>
			</div>
		</div>
	)
}

export default CardProfile
