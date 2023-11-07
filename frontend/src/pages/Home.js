import homeHero from '../images/weights-hero.jpg'
import MembershipCards from '../components/MembershipCards'
import ClassCards from '../components/ClassCards'
import FAQs from '../components/FAQs'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className="">
            <Hero src={homeHero} />
            <MembershipCards />
            <ClassCards />
            <FAQs />
        </div>
    )
}

export default Home