import PropTypes from 'prop-types';

const Img = ({ altImg, className, onClick }) => {
	const routeFile = `/assets/img/${altImg}.png`;

	return (
		<>
			<img
				className={className}
				src={routeFile}
				alt={altImg}
				onClick={onClick}
			/>
		</>
	);
};

Img.propTypes = {
	onClick: PropTypes.func,
	altImg: PropTypes.string,
	className: PropTypes.string,
};

export default Img;
