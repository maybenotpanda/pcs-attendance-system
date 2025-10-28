// ** React Imports
import React from 'react'

const UserList = () => {
	return (
		<div className="flex items-start justify-center p-5 bg-white rounded-md w-full shadow-md mx-auto">
			{[...Array(7)].map((_, i) => (
				<div key={i} className={`relative -ml-2 first:ml-0 z-[${10 - i}] flex flex-col items-center`}>
					<img
						src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
						alt="User"
						className="rounded-full w-12 h-12 border-2 border-white shadow-md"
					/>
					<div className="grid justify-items-center mt-1">
						<span className="font-bold text-sm">Test</span>
						<span className="text-xs text-gray-500">Jogja</span>
					</div>
				</div>
			))}
			<div className="-ml-4 first:ml-0 w-12 h-12 text-center bg-primary text-white rounded-full grid justify-items-center place-content-center font-bold text-xs shadow-md">
				<span>10</span>
				<span>more</span>
			</div>
		</div>
	)
}

export default UserList
