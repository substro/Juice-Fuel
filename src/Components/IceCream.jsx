import React, { Fragment } from 'react'
import { IoIosIceCream } from 'react-icons/io'
import { flavours, prices } from '../Data/IceCream'

export const IceCream = () => {
	return (
		<>
			<div className='section-title'>
				<div className='icon'>
					<IoIosIceCream />
				</div>
				<h3>Arabic Ice Cream</h3>
			</div>

			<div className='ice-cream-container'>
				<div className='sizes'>
					<h4>Medium</h4>
					<h4>Large</h4>
					{/* <h4></h4> */}
					<h4>1 KG</h4>
				</div>
				<div className='price'>
					{prices.map((item, i) => (
						<Fragment key={i}>
							<p>{item.medium}</p>
							<p>{item.Large}</p>
							<p>{item.half}</p>
							<p>{item.one}</p>
						</Fragment>
					))}
				</div>

				<div className='flavours'>
					<h4>Flavours</h4>
					<ul className='items'>
						{flavours.map((item, index) => (
							<li key={index}>
								<span className='name'>
									<b>| </b>
									{item.name}
									<b>|</b>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
