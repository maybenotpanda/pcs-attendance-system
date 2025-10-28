// ** React Imports
import React from 'react'

// ** Icons Imports
import { FaCoins } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'
import { BsAlarmFill } from 'react-icons/bs'
import { HiCheck, HiOutlineXMark, HiArrowRight } from 'react-icons/hi2'

// ** Utils Imports
import { formatDate } from 'config/utils/date'

const Message = (props) => {
	// ! props
	const { title, type, description, status, date } = props

	return (
		<div className="flex justify-between gap-2">
			<div className="relative inline-block">
				<div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-2xl text-white">
					{type === 'Reimbursement' ? (
						<FaCoins />
					) : type === 'Sickness' ? (
						<GiMedicines />
					) : type === 'Overtime' ? (
						<BsAlarmFill />
					) : (
						''
					)}
				</div>
				<div
					className={`absolute -bottom-2 -right-2 text-white text-xs font-bold p-1 rounded-full shadow
                                ${
                                status === 'Approved' ? 'bg-success-50'
								: status === 'Processad' ? 'bg-information-50'
								: status === 'Rejected' ? 'bg-error-50'
								: 'bg-gray-400'
								}
                            `}
                >
					{status === 'Approved' ? <HiCheck /> : status === 'Processad' ? <HiArrowRight /> : <HiOutlineXMark />}
				</div>
			</div>
			<div className="grid gap-1 w-full">
				<h6>{title}</h6>
				<p>{description}</p>
			</div>
			<span className="w-40 text-right">{formatDate(date)}</span>
		</div>
	)
}

export default Message
