import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Button, Card } from 'keep-react';
import { Link } from 'react-router-dom';


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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mt-6 max-w-[100rem] mx-auto '>
        {trainer.map(trainers => (
          <Card
            key={trainers._id}
            className="max-w-xs overflow-hidden rounded-md hover:scale-105 transition-transform duration-300"
            imgSrc={trainers.image}
            imgSize="md"
          >
            
            <Card.Container className="space-y-4 p-6">
              <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
               
                <span>{trainers.name}</span>
              </Card.Title>
              <Card.Container className="flex items-center justify-between">
                <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                 
                  <span>{trainers.experience}</span>
                </Card.Title>
                
              </Card.Container>
              <Card.Container className="flex items-center justify-between">
                <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                  
                  <span>Available Time: Mon-Fri, 9 AM - 5 PM</span>
                </Card.Title>
               
              </Card.Container>
              <Card.Container className="my-3 flex items-center justify-between">
                <Link to={`/trainerDetail/${trainers._id}`}>
                <Button type="primary" size="sm">
                  Know More
                </Button>
                
                </Link>
                <Card.Title className="text-body-3 flex gap-4 font-medium text-metal-500">
                  <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer" />
              <RiTwitterXFill className="text-blue-400 hover:text-blue-600 cursor-pointer" />
              <BsWhatsapp className="text-green-500 flex gap-3 hover:text-green-700 cursor-pointer" />
              </Card.Title>
              </Card.Container>
            </Card.Container>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
