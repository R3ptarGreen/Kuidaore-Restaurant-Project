import './LinkMenu.scss';
import {Link} from 'react-router-dom'
const LinkMenu = () => {
	return (
		<div className='linkMenuNav'>
			<Link className='link' to='/'>
				<p>Home</p>
			</Link>
			<Link className='link' to='menu'>
				<p>Menu</p>
			</Link>
			<Link className='link' to='restaurants'>
				<p>Restaurant</p>
			</Link>
			<Link className='link' to='gallery'>
				<p>Gallery</p>
			</Link>
			<Link className='link' to='contact'>
				<p>Contact</p>
			</Link>
		</div>
	);
};

export default LinkMenu;
