import './Icon.scss';
import PropTypes from 'prop-types';

const Icon = ({altIcon, link}) => {
const routeIcon = `/public/assets/svg/${altIcon}.svg`;
    return (
    <>
        <a className='iconLink' href={link}><img src={routeIcon} alt={altIcon} /></a>
    </>
  )
}
Icon.propTypes = {
    link: PropTypes.string,
    altIcon: PropTypes.string
}

export default Icon