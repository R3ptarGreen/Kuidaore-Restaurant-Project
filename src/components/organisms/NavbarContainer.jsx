import NavbarBrand from '../atoms/NavbarBrand';
import NavbarMenu from '../molecules/NavbarMenu';
import './NavbarContainer.scss';

const NavbarContainer = () => {
  return (
    <div className='navbar__container'>
        <NavbarBrand/>
        <NavbarMenu/>
    </div>
  )
}

export default NavbarContainer