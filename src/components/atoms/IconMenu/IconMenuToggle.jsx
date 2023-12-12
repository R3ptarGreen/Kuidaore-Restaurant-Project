import './IconMenuToggle.scss';
import PropTypes from 'prop-types';

const IconMenuToggle = ({ menuToggle, classNameCloseMenu, classNameMenu }) => {
	return (
		<button className='menuToggle' onClick={menuToggle}>
			<img
				className={classNameMenu}
				src='/assets/svg/menuToggle.svg'
				alt='menuToggle'
			/>
			<img
				className={classNameCloseMenu}
				src='/assets/svg/closeMenuToggle.svg'
				alt='closeMenuToggle'
			/>
		</button>
	);
};

IconMenuToggle.propTypes = {
	menuToggle: PropTypes.func,
	classNameMenu: PropTypes.string,
	classNameCloseMenu: PropTypes.string,
};

export default IconMenuToggle;
