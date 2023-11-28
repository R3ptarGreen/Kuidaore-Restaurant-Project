import Img from '../../atoms/Img/Img';
import ContactSection from '../../molecules/ContactSection/ContactSection';
import './ContactContainer.scss';
const ContactContainer = () => {
  return (
    <div className='contact'>
        <div className='contact__container'>
          <div className='contact__sectionImg'>
            <Img className={'contact__img'} altImg={'contactImg'}/>
          </div>
            <ContactSection/>
        </div>
    </div>
  )
}

export default ContactContainer