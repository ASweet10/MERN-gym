import homeHero from '../images/weights-hero.jpg'
import MembershipCards from '../components/MembershipCards'
import Hero from '../components/Hero'
import TextAndImage from '../components/TextAndImage'
import benchpress from '../images/home-benchpress.jpg'
import classes from '../images/home-classes.jpg'
import blog from '../images/home-blog.jpg'
import friends from '../images/home-friends.jpg'
import MissionBanner from '../components/MissionBanner'
import ClassesBanner from '../components/ClassesBanner'

const Home = () => {

    const textImageData = [
        {id: 1, title: "Expert Personal Trainers", desc: "Sign up for one-on-one or small group training sessions", btnText: "Learn More", img: benchpress, type: "A", link: ""},
        {id: 2, title: "Group Classes", desc: "We offer 12 different classes including yoga, boxing, and karate", btnText: "See All Classes", img: classes, type: "B", link: "/classes"},
        {id: 3, title: "EliteFitness Blog", desc: "Check out our blog for news and fitness advice", btnText: "Visit Blog", img: blog, type: "A", link: "/blog"},
        {id: 4, title: "Refer a Friend", desc: "Get $10 for each friend or family member that signs up for membership", btnText: "Learn More", img: friends, type: "B", link: ""},
    
    ]
    const firstElement = textImageData[0]

    return (
        <div className="">
            <Hero src={homeHero} />
            <MissionBanner />
            <MembershipCards />
            <TextAndImage props={firstElement}/>
            <ClassesBanner />
        </div>
    )
}

export default Home