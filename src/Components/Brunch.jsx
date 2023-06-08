import React from 'react'
import { MdBrunchDining } from 'react-icons/md'
import { addOns, crepes, waffles } from '../Data/Brunch'

export const Brunch = () => {
	return (
		<>
			<div className='section-title'>
				<div className='icon'>
					<MdBrunchDining />
				</div>
				<h3>Crepes & waffles</h3>
			</div>
			<div className='main-container'>
				<div className='brunch'>
					<h4>Crepes</h4>
					<ul className='items'>
						{crepes.map((item, index) => (
							<li key={index}>
								<span className='name'>{item.name}</span> : {item.price}{' '}
								{item.extra && `- Extra: ${item.extra}`}
							</li>
						))}
					</ul>
				</div>
				<div className='brunch'>
					<h4>Waffles</h4>
					<ul className='items'>
						{waffles.map((item, index) => (
							<li key={index}>
								<span className='name'>{item.name}</span> : {item.price}{' '}
								<span className='name'>{item.extra && `- Extra: ${item.extra}`}</span>
							</li>
						))}
					</ul>
				</div>
				<div className='add-ons'>
					<h4>Add-ons</h4>
					<ul className='items'>
						{addOns.map((item, index) => (
							<li key={index}>
								<span className='name'>{item.name}</span> : {item.price}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
