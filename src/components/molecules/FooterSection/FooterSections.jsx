import './FooterSections.scss';
import PropTypes from 'prop-types';

const FooterSections = ({ title, one, two, three, four }) => {
	return (
		<div className='footer__footerSections'>
			<h2 className='footer__footerSectionsTitle'>{title}</h2>
			<div className='footer__footerSectionsLinksContainer'>
				<a className='footerLink' href=''>
					{one}
				</a>
				<a className='footerLink' href=''>
					{two}
				</a>
				<a className='footerLink' href=''>
					{three}
				</a>
				<a className='footerLink' href=''>
					{four}
				</a>
			</div>
		</div>
	);
};

FooterSections.propTypes = {
	title: PropTypes.string,
	one: PropTypes.string,
	two: PropTypes.string,
	three: PropTypes.string,
	four: PropTypes.string,
};

export default FooterSections;
