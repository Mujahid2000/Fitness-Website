
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Trainer = () => {
    const [trainer, setTrainer] = useState([]);


    useEffect(() => {
      axios.get('http://localhost:5050/trainer')
        .then(res => res.data)
        .then(data => setTrainer(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);




    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
      {
        trainer.map(trainers => 
          <div key={trainers._id} className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={trainers.image}
            alt="Trainer Profile"
            className="w-44 h-44 object-cover rounded-full mx-auto"/>
          <h2 className="mt-4 text-xl font-semibold text-center">{trainers.name}</h2>
          <p className="mt-2 text-gray-600 text-center">{trainers.experience}</p>
          <div className="flex justify-center mt-4 gap-5">
          <FaFacebook />
          <RiTwitterXFill />
          <BsWhatsapp/>
          </div>
          <p className="mt-4 text-center">Available Time: Mon-Fri, 9 AM - 5 PM</p>
          <div className="mt-6 text-center">
            <Link to={`/trainerDetail/${trainers._id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Know More
            </button>
            </Link>
          </div>
          </div>  
        )
      }
        </div>
    );
};

export default Trainer;