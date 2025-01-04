import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Button, Card } from 'keep-react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import './trainer.css'
import HoverPlusButton from './SocialIcons';

const Trainer = () => {
  const [trainer, setTrainer] = useState([]);
  const [loading, setLoading] = useState(true);

  const containerStyle = {
    backgroundImage: 'url("https://i.ibb.co.com/DbHf0mN/breadcumb-bg.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading before the fetch
      try {
        const response = await axios.get('https://gym-server-orpin.vercel.app/trainer');
        setTrainer(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading after fetch attempt
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-black'>
      <Helmet>
        <title>Fitness || Trainer</title>
      </Helmet>
      <div className="px-7 max-w-full bg-black pt-20 mx-auto">
              <div
                className="relative   flex items-center justify-center"
                style={containerStyle}
              >
                <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
                <div className="relative justify-center flex md:mr-0 z-10 text-white text-center">
                  <div className='flex items-center justify-between'>
                  <div className="flex w-full mx-10 rounded ">
                    <h2 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold'>Trainers</h2>
                  </div>
                    <div className='hidden lg:block'>
                      <img className='h-[300px] w-[800px]' src="https://i.ibb.co.com/kxYB2CT/download.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              </div>

      <div className='grid bg-black grid-cols-1 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2  max-w-7xl justify-self-center place-items-center
 mx-auto'>
  {
    loading? 
    

(

  <div className="bg-gray-900 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
        <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-300 animate-pulse" ></div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-1 flex-col gap-3">
            <div className="bg-gray-300 w-full animate-pulse h-14 rounded-2xl" ></div>
            <div className="bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
            <div className="bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
            <div className="bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
            <div className="bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
          </div>
          <div className="mt-auto flex gap-3">
            <div className="bg-gray-300 w-20 h-8 animate-pulse rounded-full" ></div>
            <div className="bg-gray-300 w-20 h-8 animate-pulse rounded-full" ></div>
            <div className="bg-gray-300 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
          </div>
        </div>
  </div>
):
(
  trainer.map(trainers => (
    <div key={trainers._id} className="max-w-sm rounded overflow-hidden shadow-lg ">
      <div className='bg-white h-60 w-60 rounded-t-full mt-9 mx-auto absolute'>

      </div>
    <img className="h-3/4 w-full clip-custom" src={trainers.image} alt="Sample" />
    <div className="px-8 rounded-b-xl absolute py-5 -mt-[135px] bg-gray-950 clip-custom1">
     <Link to={`/trainerDetail/${trainers._id}`}>
     <p className="font-bold text-2xl hover:text-blue-700 text-white text-center pt-16  ">{trainers.name}</p>
     </Link>
      <p className="font-bold text-center text-blue-700 text-sm py-3 mb-2 ">{trainers.title}</p>
    </div>
    <HoverPlusButton/>
  </div>
  ))
)

  }:

      </div>
      
    </div>
  );
};

export default Trainer;
