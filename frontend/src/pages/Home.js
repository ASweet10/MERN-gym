import homeHero from '../images/weights-hero.jpg'
import MembershipCards from '../components/MembershipCards'
import Hero from '../components/Hero'
import TextAndImage from '../components/TextAndImage'
import benchpress from '../images/home-benchpress.jpg'
import dumbbellCurl from '../images/dumbbellCurl.jpg'
import blog from '../images/home-blog.jpg'
import friends from '../images/home-friends.jpg'
import OpaqueImageBanner from '../components/OpaqueImageBanner'
import ClassesBanner from '../components/ClassesBanner'
import FreeTrialBanner from '../components/FreeTrialBanner'
import BlogBanner from '../components/BlogBanner'


const Home = () => {
    const textImageData = [
        {
            id: 1,
            title: "Expert Personal Trainers",
            desc: "Sign up for one-on-one or small group training sessions",
            btnText: "Meet the Team",
            img: benchpress,
            type: "A",
            link: "/"
        },
        {
            id: 2,
            title: "Group Classes",
            desc: "We offer 12 different classes including yoga, boxing, and karate",
            btnText: "See All Classes",
            img: blog,
            type: "B",
            link: "/classes"
        },
        {
            id: 3,
            title: "EliteFitness Blog",
            desc: "Check out our blog for news and fitness advice",
            btnText: "Visit Blog",
            img: blog,
            type: "A",
            link: "/blog"
        },
        {
            id: 4,
            title: "Refer a Friend",
            desc: "Get $10 for each friend or family member that signs up for membership",
            btnText: "Learn More",
            img: friends,
            type: "B",
            link: ""
        },
    ]
    const firstElement = textImageData[0]

    return (
        <div className="">
            <Hero src={homeHero} />
            <MembershipCards />
            <TextAndImage props={firstElement}/>
            <ClassesBanner />
            <OpaqueImageBanner src={dumbbellCurl} />
            <FreeTrialBanner />
            <BlogBanner />
        </div>
    )
}

export default Home