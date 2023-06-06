import React, { useRef, useState } from 'react'
import { BsCalendarEventFill } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { schedules } from '../Data/Schedule'

export const Schedule = () => {
	const dialogRef = useRef(null)
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	const openPopup = () => {
		setIsPopupOpen(true)
	}

	const closePopup = () => {
		setIsPopupOpen(false)
	}

	const handleClick = (event) => {
		event.preventDefault()
		openPopup()
	}

	return (
		<div className={`schedule `}>
			<a href='#' onClick={handleClick} className='schedule-btn'>
				<div className='icon'>
					<BsCalendarEventFill />
				</div>
				Schedule
			</a>

			{isPopupOpen && (
				<div className={`popup ${isPopupOpen ? 'fade-in' : ''}`} ref={dialogRef}>
					<button className='close-btn' onClick={closePopup}>
						<FaTimes />
					</button>
					<div className='content'>
						<h2>Schedule</h2>
						<ul>
							<li>
								<span className='name'>Monday:</span> {schedules.monday}
							</li>
							<li>
								<span className='name'>Tuesday-Sunday:</span> {schedules.tuesday}
							</li>
							<li>
								<span className='name'>Break: </span>
								{schedules.break}
							</li>
							<li>
								<span className='name'>Saj:</span> {schedules.saj}
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}
