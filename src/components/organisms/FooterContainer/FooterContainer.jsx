import FooterBrand from '../../molecules/FooterBrand/FooterBrand';
import FooterSections from '../../molecules/FooterSection/FooterSections';
import './FooterContainer.scss';

const FooterContainer = () => {
	return (
		<div className='footer__footerContainer'>
			<div className='footer__footerSectionsContainer'>
				<FooterBrand />
				<FooterSections
					title={'Company Info'}
					one={'About us'}
					two={'We are hiring'}
					three={'Blog'}
				/>
				<FooterSections
					title={'Features'}
					one={'Live chat'}
					two={'Busines Marketing'}
				/>
				<FooterSections
					title={'Resources'}
					one={'IOS & Android'}
					two={'Customers'}
					three={'API'}
				/>
			</div>
			<div className='footer__footerCopyright'>
				<p>Designed With Figma And Coded By Edgar Mendez</p>
			</div>
		</div>
	);
};

export default FooterContainer;
