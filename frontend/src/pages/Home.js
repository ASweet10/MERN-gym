import homeHero from '../images/weights-hero.jpg'
import MembershipCards from '../components/MembershipCards'
import Hero from '../components/Hero'
import TextAndImage from '../components/TextAndImage'

const Home = () => {
    return (
        <div className="">
            <Hero src={homeHero} />
            <MembershipCards />
            <TextAndImage />
        </div>
    )
}

export default Home