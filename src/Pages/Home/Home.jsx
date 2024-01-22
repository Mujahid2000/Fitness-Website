
import { Helmet } from "react-helmet";
import About from "./About";
import HomeBanner from "./Banner";
import Blog from "./Blog";
import Featured from "./Featured";
import Subscription from "./Subscription";
import Success from "./Success";
import TransitionCard from "./TransitionCard";
import Health from "./Health";
import ContactUS from "./Contact";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <Featured></Featured>
            <Success></Success>
            <Blog></Blog>
            <TransitionCard></TransitionCard>
            <About></About>
            <Health></Health>
            <Subscription></Subscription>
            <ContactUS></ContactUS>
        </div>
    );
};

export default Home;