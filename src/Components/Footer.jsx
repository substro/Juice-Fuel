import React from 'react'
import { Socials } from '../Data/Socials'
import DrinksTab from './DrinksTab'
import { IceCream } from './IceCream'
import { Brunch } from './Brunch'
import { Saj } from './Saj'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { MainSection } from '../MainSection'

export const Footer = ({ activePage, setActivePage }) => {
	const [showButton, setShowButton] = useState(false)
	const handleScroll = () => {
		const scrollY = window.scrollY
		const showThreshold = 500
		setShowButton(scrollY > showThreshold)
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	const scrollToContent = () => {
		window.scrollTo({ top: 400, behavior: 'smooth' })
	}
	return (
		<>
			<footer className='footer'>
				<div className='socials-container'>
					<h2>Socials</h2>
					<ul className='socials'>
						<li>
							<a href={Socials.whatsapp} target='_blank' rel='noopener noreferrer'>
								WhatsApp
							</a>
						</li>
						<li>
							<a href={Socials.facebook} target='_blank' rel='noopener noreferrer'>
								Facebook
							</a>
						</li>
						<li>
							<a href={Socials.instagram} target='_blank' rel='noopener noreferrer'>
								Instagram
							</a>
						</li>
						<li>
							<a href={Socials.tiktok} target='_blank' rel='noopener noreferrer'>
								TikTok
							</a>
						</li>
						<li>
							<a href={Socials.location} target='_blank' rel='noopener noreferrer'>
								Location
							</a>
						</li>
					</ul>
				</div>
				<div className='content-container'>
					<h2>Content</h2>
					<ul className='content'>
						<li>
							<button
								onClick={() => {
									setActivePage('Drinks')
									scrollToContent()
								}}>
								Drinks
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setActivePage('Ice-Cream')
									scrollToContent()
								}}>
								Ice-Cream
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setActivePage('Crepes & Waffles')
									scrollToContent()
								}}>
								Crepes & Waffles
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setActivePage('Saj')
									scrollToContent()
								}}>
								Saj
							</button>
						</li>
					</ul>
				</div>
				<h2 className='credit'>
					Designed and developed by
					<a href='https://github.com/substro' target='_blank' rel='noopener noreferrer' className='git-link'>
						Ali Amin
					</a>
				</h2>
				{showButton && (
					<button className='back-to-top' onClick={scrollToTop}>
						<AiOutlineArrowUp />
					</button>
				)}
			</footer>
		</>
	)
}
