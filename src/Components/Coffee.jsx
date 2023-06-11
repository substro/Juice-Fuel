import React from 'react'
import { LuCoffee } from 'react-icons/lu'
import { coffeeData } from '../Data/Drinks'

export const Coffee = () => {
	return (
		<div className='drink-container-coffee'>
			<div className='section-title'>
				<div className='icon'>
					<LuCoffee />
				</div>
				<h3>Drinks</h3>
				<div className='ball'></div>
				<h4>coffee</h4>
			</div>
			<table>
				<tbody>
					{coffeeData.map((x) => {
						return (
							<tr className='item' key={x.id}>
								<td>
									<h1>{x.name.en}</h1>
								</td>

								<td className='prices'>
									{x.sizes.map((y, index) => {
										return <span key={index}>{y.price}</span>
									})}
								</td>

								<td>
									<h1>{x.name.ar}</h1>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
