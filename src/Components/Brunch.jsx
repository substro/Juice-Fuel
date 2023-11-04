import React, { useEffect, useState } from 'react';
import { MdBrunchDining } from 'react-icons/md';
import { addOns, crepes, waffles } from '../Data/Brunch';

export const Brunch = () => {
	const [allMenu, setAllMenu] = useState();

	useEffect(() => {
		const getBruch = async () => {
			try {
				const response = await fetch(
					'https://script.google.com/macros/s/AKfycbwQvjoMdolN0LvAXXEdJfFES9HhCathgpckLDEZ-zI39zbuHp0TOyDNYcB9eiRnTkGg/exec'
				);

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const {data} = await response.json();
				setAllMenu(data);
				console.log("🚀 ~ file: Brunch.jsx:21 ~ getBruch ~ data:", data)
				// Do something with the data here
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		getBruch();
	}, []); // Empty array means this effect runs once on component mount

	if (!allMenu) {
		return <>Loading...</>
	}

	return (
		<>
			<div className="section-title">
				<div className="icon">
					<MdBrunchDining />
				</div>
				<h3>Crepes & waffles</h3>
			</div>
			<div className="main-container">
				<div className="brunch">
					<h4>Crepes</h4>
					<ul className="items">
						{allMenu?.map((item, index) => (
							<li key={index}>
								<span className="name">{item.name}</span> : {item.price}{' '}
								{item.extra && `- Extra: ${item.extra}`}
							</li>
						))}
					</ul>
				</div>
				<div className="brunch">
					<h4>Waffles</h4>
					<ul className="items">
						{waffles.map((item, index) => (
							<li key={index}>
								<span className="name">{item.name}</span> : {item.price}{' '}
								<span className="name">
									{item.extra && `- Extra: ${item.extra}`}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="add-ons">
					<h4>Add-ons</h4>
					<ul className="items">
						{addOns.map((item, index) => (
							<li key={index}>
								<span className="name">{item.name}</span> : {item.price}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
