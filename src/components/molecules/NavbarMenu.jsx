import LinkMenu from '../atoms/LinkMenu';
import IconMenuToggle from '../atoms/iconMenuToggle';
import './NavbarMenu.scss';
import { useState } from 'react';

const NavbarMenu = () => {
	const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

	const menuToggle = () => {
		setMobileMenuVisible(!isMobileMenuVisible);
    setMenuOpen(!isMenuOpen);
	};

	return (
		<div className='navbar__menu menu'>
			<div className='menu__mobile mobile'>
				<IconMenuToggle
					classNameMenu={`${isMenuOpen ? 'noOpen': '' }`}
					classNameCloseMenu={`${isMenuOpen ? 'open': 'noOpen'}`}
					menuToggle={menuToggle}
				/>

				<div
					className={`mobile__menu ${
						isMobileMenuVisible ? 'visible' : 'noVisible'
					}`}
				>
					<LinkMenu />
				</div>
			</div>
			<div className='menu__desktop'></div>
		</div>
	);
};

export default NavbarMenu;
