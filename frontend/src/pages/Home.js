import homeHero from '../images/weights-hero.jpg'
import MembershipCards from '../components/MembershipCards'
import FAQs from '../components/FAQs'
import Hero from '../components/Hero'
import TextAndImage from '../components/TextAndImage'

const Home = () => {
    return (
        <div className="">
            <Hero src={homeHero} />
            <TextAndImage />
            <FAQs />
        </div>
    )
}

export default Home