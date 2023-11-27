import './RestaurantActiveInfo.scss';
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
const RestaurantActiveInfo = ({onLocationSelect}) => {

	const [data, setData] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState({});
	const [selectedIndex, setSelectedIndex] = useState(0)
	useEffect(() => {
		fetch('src/db/RestaurantsPlaces.json')
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.log('ERRO DataBase',error));
	},[]);

	const handleLocation = e => {
		const selectedIndex = Number(e.target.value);
		const selectedLocationData = data[selectedIndex];
		setSelectedLocation(selectedLocationData);
		onLocationSelect(selectedLocationData.ip);
		setSelectedIndex(selectedIndex)

	};
	return (
		<>
			<h2 className='rest__activeInfoTitle'>Select Your Restaurant</h2>
			<select
				name='selectLocation'
				id='selectLocation'
				onChange={handleLocation}
			>
				{data.map((location, index) => {
					return (
						<option key={index} value={index}>{location.locationPlace}</option>
					)
				})}
			</select>
			<div
				className={`rest__placeInfoContainer ${selectedIndex == '0' ? 'offInfo':'onInfo'}`}
			>
				<h2 className='rest__placeInfoTitle'>{selectedLocation.title}</h2>
				<p className='rest__placeInfoSchedule'>{selectedLocation.schedule}</p>
				<img className='rest__placeInfoImg' src={selectedLocation.img} alt={selectedLocation.title} />
			</div>
		</>
	);
};
RestaurantActiveInfo.propTypes = {
	onLocationSelect: PropTypes.func
}

export default RestaurantActiveInfo;
