import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Trainer = () => {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    axios.get('https://fitness-server-iota.vercel.app/trainer')
      .then(res => res.data)
      .then(data => setTrainer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Fitness || Trainer</title>
      </Helmet>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        {trainer.map(trainers => (
          <div key={trainers._id} className="bg-gray-100 border p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300">
            <img
              src={trainers.image}
              alt="Trainer Profile"
              className="w-44 h-44 object-cover rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">{trainers.name}</h2>
            <p className="mt-2 text-gray-600 text-center">{trainers.experience}</p>
            <div className="flex justify-center mt-4 gap-5">
              <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer" />
              <RiTwitterXFill className="text-blue-400 hover:text-blue-600 cursor-pointer" />
              <BsWhatsapp className="text-green-500 hover:text-green-700 cursor-pointer" />
            </div>
            <p className="mt-4 text-center text-gray-800">Available Time: Mon-Fri, 9 AM - 5 PM</p>
            <div className="mt-6 text-center">
              <Link to={`/trainerDetail/${trainers._id}`}>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 duration-300">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
