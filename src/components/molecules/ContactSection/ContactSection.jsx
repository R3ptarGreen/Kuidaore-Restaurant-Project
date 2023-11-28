import './ContactSection.scss';
import { useEffect, useState } from 'react';

const ContactSection = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('src/db/RestaurantsPlaces.json')
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.log('Error DataBase', error));
	}, []);
	console.log(data);
	return (
		<section className='contact__section'>
			<div className='contact__sectionTextContainer'>
				<h2 className='contact__title'>Contact Us</h2>
				{data.map((item, index) => {
					return (
						<div className='contact__sectionTextInfoContainer' key={index}>
							<div className='contact__placeContainer'>
								<h3 className='contact__place'>{item.title}</h3>
								<span className='contact__tel'>{item.tel}</span>
							</div>
							<p className='contact__schedule'>{item.schedule}</p>
						</div>
					);
				})}
				<form action=''></form>
			</div>
		</section>
	);
};

export default ContactSection;
