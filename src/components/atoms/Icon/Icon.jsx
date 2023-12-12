import './Icon.scss';
import PropTypes from 'prop-types';

const Icon = ({ altIcon, link }) => {
	const routeIcon = `/assets/svg/${altIcon}.svg`;
	return (
		<>
			<a className='iconLink' href={link}>
				<img className='iconImg' src={routeIcon} alt={altIcon} />
			</a>
		</>
	);
};
Icon.propTypes = {
	link: PropTypes.string,
	altIcon: PropTypes.string,
};

export default Icon;
