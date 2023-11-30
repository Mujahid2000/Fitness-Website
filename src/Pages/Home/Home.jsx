import About from "./About";
import HomeBanner from "./Banner";
import Blog from "./Blog";
import Featured from "./Featured";
import Subscription from "./Subscription";
import Success from "./Success";
import TransitionCard from "./TransitionCard";


const Home = () => {
    return (
        <div>
            
            <HomeBanner></HomeBanner>
            <Featured></Featured>
            <About></About>
            <Success></Success>
            <Blog></Blog>
            <Subscription></Subscription>
            <TransitionCard></TransitionCard>
        </div>
    );
};

export default Home;