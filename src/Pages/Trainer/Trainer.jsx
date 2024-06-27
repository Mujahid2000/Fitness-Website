import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Button, Card } from 'keep-react';
import { Link } from 'react-router-dom';


const Trainer = () => {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    axios.get('https://gym-server-orpin.vercel.app/trainer')
      .then(res => res.data)
      .then(data => setTrainer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Fitness || Trainer</title>
      </Helmet>
      <div className='grid bg-black grid-cols-1 pt-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5  max-w-full justify-self-center place-items-center
 mx-auto'>
        {trainer.map(trainers => (
          <div key={trainers._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-950">
          <img className="h-64 w-80" src={trainers.image} alt="Sample" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-700">{trainers.name}</div>
            <p className="text-white text-base">Experience: {trainers.experience}</p>
            <p className="text-white text-base">Schedule Time: 9:00 AM - 5:00 PM</p>
          </div>
          <div className='flex justify-between items-center'>
          <Link to={`/trainerDetail/${trainers._id}`}>
          <div className="px-6 py-4">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Details
            </button>
          </div>
          </Link>
          <div className="px-6 flex gap-4 pt-4 pb-2">
            <FaFacebook className='w-6 h-6 text-blue-500'/>
            <FaTwitter className='w-6 h-6 text-blue-600'/>
            <FaWhatsapp className='w-6 h-6 text-green-500'/>
          </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
