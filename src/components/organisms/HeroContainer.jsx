import Img from '../atoms/Img';
import HeroTextAndButton from '../molecules/HeroTextAndButton';
import './HeroContainer.scss';

const HeroContainer = () => {
  return (
    <div className='hero__container'>
        <Img altImg={'heroImgMobile'} className={'hero__img'}/>
        <HeroTextAndButton />
    </div>
  )
}

export default HeroContainer