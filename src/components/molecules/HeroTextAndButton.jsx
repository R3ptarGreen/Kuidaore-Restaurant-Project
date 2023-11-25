import Button from '../atoms/Button';
import './HeroTextAndButton.scss';

const HeroTextAndButton = () => {

  return (
    <div className='hero__textContainer'>
      <h2 className='hero__title'>Japanese Food</h2>
      <p className='hero__text'>Our menu, designed by expert chefs with a passion for authenticity, offers a dining experience that captures the essence of Japan.</p>
      <Button buttonText={'Contact'} color={'heroButtonPrimary'}/>
    </div>
  )
}

export default HeroTextAndButton