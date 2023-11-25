import FooterTemplates from "../components/templates/FooterTemplates"
import HeroTemplate from "../components/templates/HeroTemplate"
import NavbarTemplate from "../components/templates/NavbarTemplate"

const Home = () => {
  return (
    <div>
        <NavbarTemplate/>
        <HeroTemplate/>
        <FooterTemplates/>
    </div>
  )
}

export default Home