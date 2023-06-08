import { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaMapMarkerAlt, FaTiktok, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { schedules } from '../Data/Schedule'
import { Socials } from '../Data/Socials'

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<button data-visible={isOpen} onClick={() => setIsOpen((prev) => !prev)} className='nav-btn '>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>
			<nav className={isOpen ? 'open' : ''}>
				<ul className={` primary-nav `} data-visible={isOpen}>
					<li>
						<h2>Socials</h2>
						<a href={Socials.whatsapp} target='_blank' className='whatsapp'>
							<div className='wa-icon'>
								<FaWhatsapp />
							</div>
							<span className='wa-text'>+961 81 974 945</span>
						</a>
					</li>
					<li>
						<a href={Socials.facebook} target='_blank'>
							<FaFacebook /> Facebook
						</a>
					</li>
					<li>
						<a href={Socials.instagram} target='_blank'>
							{' '}
							<FaInstagram /> Instagram
						</a>
					</li>
					<li>
						<a href={Socials.tiktok} target='_blank'>
							<FaTiktok /> TikTok
						</a>
					</li>
					<li>
						<a href={Socials.location} target='_blank'>
							{' '}
							<FaMapMarkerAlt />
							Location
						</a>
					</li>
					<li>
						<div className='content'>
							<h2>Schedule</h2>
							<ul>
								<li>Monday:&nbsp;{schedules.monday}</li>
								<li>Tuesday-Sunday: &nbsp;{schedules.tuesday}</li>
								<li>Break: &nbsp;{schedules.break}</li>
								<li>Saj: &nbsp;{schedules.saj}</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</>
	)
}
