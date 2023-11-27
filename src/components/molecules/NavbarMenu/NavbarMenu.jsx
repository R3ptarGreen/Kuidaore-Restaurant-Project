import LinkMenu from '../../atoms/LinkMenu/LinkMenu';
import IconMenuToggle from '../../atoms/IconMenu/IconMenuToggle';
import './NavbarMenu.scss';
import { useState } from 'react';

const NavbarMenu = () => {
	const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

	const [isMenuNavOpen, setMenuNavOpen] = useState(false);

	const menuNavToggle = () => {
		setMobileMenuVisible(!isMobileMenuVisible);
		setMenuNavOpen(!isMenuNavOpen);
	};

	return (
		<div className='navbar__menu menuNav'>
			<div className='menuNav__mobile mobile'>
				<IconMenuToggle
					classNameMenu={`${isMenuNavOpen ? 'noOpen' : ''}`}
					classNameCloseMenu={`${isMenuNavOpen ? 'open' : 'noOpen'}`}
					menuToggle={menuNavToggle}
				/>

				<div
					className={`mobile__menuNav ${
						isMobileMenuVisible ? 'visible' : 'noVisible'
					}`}
				>
					<LinkMenu />
				</div>
			</div>
			<div className='menuNav__desktop'>
				<LinkMenu />
			</div>
		</div>
	);
};

export default NavbarMenu;
