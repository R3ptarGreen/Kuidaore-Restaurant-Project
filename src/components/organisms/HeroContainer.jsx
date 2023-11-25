import HeroTextAndButton from '../molecules/HeroTextAndButton';
import './HeroContainer.scss';

const HeroContainer = () => {
  return (
    <div className='hero__container'>
      <div className='hero__containerContent'>
        <HeroTextAndButton />
      </div>
    </div>
  )
}

export default HeroContainer