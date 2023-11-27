import Icon from '../../atoms/Icon/Icon';
import './FooterBrand.scss';

const FooterBrand = () => {
	return (
		<div className='footer__footerBrand'>
			<div className='footer__footerBrandContinerTitle'>
				<h2 className='footer__footerBrandTitle'>Kuidaore</h2>
			</div>
			<div className='footer__footerBrandContainerMedia'>
				<Icon link={'#'} altIcon={'facebookIcon'} />
				<Icon link={'#'} altIcon={'instagramIcon'} />
				<Icon link={'#'} altIcon={'twitterIcon'} />
			</div>
		</div>
	);
};

export default FooterBrand;
