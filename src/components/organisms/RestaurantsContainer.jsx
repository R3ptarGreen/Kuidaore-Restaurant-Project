import './RestaurantsContainer.scss';
import {useEffect, useRef} from 'react'
import RestaurantActiveInfo from '../molecules/RestaurantActiveInfo';
import { initMap, addMarker} from '../../services/LeafletApiServices';

const RestaurantsContainer = () => {

	const mapRef = useRef(null);

	useEffect(() => {
		if(!mapRef.current){
			mapRef.current = initMap('map');
		}
	},[])

	const handleLocation = (ip) =>{
		if (mapRef.current && ip) {
            const [lat, lng] = ip.split(',').map(parseFloat);
            mapRef.current.flyTo([lat, lng], 18);
            addMarker(mapRef.current, lat, lng);
        }
	}

	return (
		<div className='rest'>
			<div className='rest__container'>
				<div className='rest__activeInfoContainer'>
					<RestaurantActiveInfo  onLocationSelect={handleLocation}/>
				</div>
				<div className='rest__activeMapContainer'>
					<div className='rest__map' id='map'></div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantsContainer;
