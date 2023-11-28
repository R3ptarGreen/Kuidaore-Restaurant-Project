import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({buttonText, color}) => {
  return (
    <>
        <button className={`button ${color}`} >{buttonText}</button>
    </>
  )
}
Button.propTypes = {
    color: PropTypes.string,
    buttonText: PropTypes.string
}
export default Button