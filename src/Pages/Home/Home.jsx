
import { Helmet } from "react-helmet";

import HomeBanner from "./Banner";


import Subscription from "./Subscription";

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
             <Subscription></Subscription>
            
        </div>
    );
};

export default Home;