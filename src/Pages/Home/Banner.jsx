import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <img src="https://i.ibb.co/MNck8nV/Untitled-1.jpg" alt="" />
            <h2  className="text-white sm:text-xs lg:text-[80px] font-bold absolute mt-[-550px] ml-32 italic">NEVER <br /> <span className="text-purple-600">GIVE UP!</span></h2>
            <p className="text-white sm:text-sm lg:text-xl font-normal absolute mt-[-310px] ml-32">Elevate your fitness with sleek trackers—precision, style, and <br /> real-time progress for a healthier you!</p>
            <Link to={'/class'}>
            <button  className="bg-violet-500 sm:relative lg:absolute mt-[-240px] ml-32 py-3 px-4 rounded-lg font-semibold text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            See Our Class
            </button>
            </Link>
            
        </div>
    );
};

export default Banner;