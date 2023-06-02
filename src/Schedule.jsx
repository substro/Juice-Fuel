import React, { useRef, useState } from 'react';
import { BsCalendarEventFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { schedules } from './Data/Schedule';

export const Schedule = () => {
	const dialogRef = useRef(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const openPopup = () => {
		setIsPopupOpen(true);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
	};

	const handleClick = (event) => {
		event.preventDefault();
		openPopup();
	};

	return (
		<div className={`schedule `}>
			<a href="#" onClick={handleClick} className="schedule-btn">
				<div className="icon">
					<BsCalendarEventFill />
				</div>
				Schedule
			</a>

			{isPopupOpen && (
				<div
					className={`popup ${isPopupOpen ? 'fade-in' : ''}`}
					ref={dialogRef}
				>
					<button className="close-btn" onClick={closePopup}>
						<FaTimes />
					</button>
					<div className="content">
						<h2>Schedule</h2>
						<ul>
							<li>Monday: {schedules.monday}</li>
							<li>Tuesday-Sunday: {schedules.tuesday}</li>
							<li>Break: {schedules.break}</li>
							<li>Saj: {schedules.saj}</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};
