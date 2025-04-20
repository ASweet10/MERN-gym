import homeHero from '../images/weights-hero.jpg'
import MembershipCards from '../components/MembershipCards'
import Hero from '../components/Hero'
import TextAndImage from '../components/TextAndImage'
import dumbbellCurl from '../images/dumbbellCurl.jpg'
import OpaqueImageBanner from '../components/OpaqueImageBanner'
import MerchBanner from '../components/MerchBanner'
import FreeTrialBanner from '../components/FreeTrialBanner'
import BlogBanner from '../components/BlogBanner'


const Home = () => {


    return (
        <div className="">
            <Hero src={homeHero} />
            <MembershipCards />
            <TextAndImage />
            <MerchBanner />
            <OpaqueImageBanner src={dumbbellCurl} />
            <BlogBanner />
            <FreeTrialBanner />
        </div>
    )
}

export default Home