
import { Helmet } from "react-helmet";
import About from "./About";
import HomeBanner from "./Banner";
import Blog from "./Blog";

import Subscription from "./Subscription";
import Success from "./Success";
import TransitionCard from "./TransitionCard";
import Health from "./Health";
import ContactUS from "./Contact";
import Featured from "./Featured";
import Program from "./Program";
import FitnessPlan from "./FitnessPlan";
import Pricing from "./Pricing";
import Review from "./Review";



const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <Program/>
            <FitnessPlan/>
            <Pricing/>
            <Review/>
            {/* <Featured/> */}
            {/* <Success></Success>
            <Blog></Blog>
            <TransitionCard></TransitionCard>
            <About></About>
            <Health></Health>
             */}
             <Subscription></Subscription>
            {/* <ContactUS></ContactUS> */}
        </div>
    );
};

export default Home;