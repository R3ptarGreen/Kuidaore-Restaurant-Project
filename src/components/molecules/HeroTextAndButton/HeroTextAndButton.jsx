import Button from '../../atoms/Button/Button';
import './HeroTextAndButton.scss';
import {Link} from 'react-router-dom'
const HeroTextAndButton = () => {
	return (
		<div className='hero__textContainer'>
			<h2 className='hero__title'>Japanese Food</h2>
			<p className='hero__text'>
				Our menu, designed by expert chefs with a passion for authenticity,
				offers a dining experience that captures the essence of Japan.
			</p>
			<Link className='hero__link' to='contact'>
				<Button buttonText={'Contact'} color={'heroButtonPrimary'} />
			</Link>
		</div>
	);
};

export default HeroTextAndButton;
