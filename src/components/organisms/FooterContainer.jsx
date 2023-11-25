import FooterBrand from '../molecules/FooterBrand';
import FooterSections from '../molecules/FooterSections';
import './FooterContainer.scss';

const FooterContainer = () => {
  return (
    <div>
        <FooterBrand/>
        <FooterSections 
          title={'Company Info'}
          one={'About us'}
          two={'We are hiring'}
          three={'Blog'}/>
        <FooterSections 
          title={'Features'}
          one={'Live chat'}
          two={'Busines Marketing'}/>
        <FooterSections 
          title={'Resources'}
          one={'IOS & Android'}
          two={'Customers'}
          three={'API'}/>
    </div>
  )
}

export default FooterContainer