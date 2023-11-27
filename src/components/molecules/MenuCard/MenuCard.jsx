import './MenuCard.scss';
import Img from '../../atoms/Img/Img';
import PropTypes from 'prop-types';

const MenuCard = ({ foodName, foodPrice, foodInfo, altImg }) => {
	return (
		<div className='menu__card'>
			<Img className={'menu__cardImg'} altImg={altImg} />
			<div className='menu__cardTextContainer'>
				<h2 className='menu__cardTextTitle'>{foodName}</h2>
				<h3 className='menu__cardTextPrice'>{foodPrice}</h3>
				<p className='menu__cardTextInfo'>{foodInfo}</p>
			</div>
		</div>
	);
};
MenuCard.propTypes = {
	altImg: PropTypes.string,
	foodInfo: PropTypes.string,
	foodName: PropTypes.string,
	foodPrice: PropTypes.string,
};

export default MenuCard;
