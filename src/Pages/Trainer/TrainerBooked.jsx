
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import {  useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaRegCircleCheck } from "react-icons/fa6";


const TrainerBooked = () => {
  const { user } = useContext(AuthContext);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const userEmail = (user.email)
  const userName = user.displayName;
  const photo= user.photoURL
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const { slot, name } = useParams();

  const handleChoosePlan = (packageName, selectedSlot, price) => {
     const finalSelectedSlot = slot || selectedSlot;
     const finalTrainerName = name || name;

    if (finalSelectedSlot === null) {
      console.error("No time slot selected.");
      return;
    }

    axios.post("https://gym-server-orpin.vercel.app/trainerBooked", {
      userEmail,
      photo,
      userName,
      packageName: packageName,
      selectedSlot: finalSelectedSlot,
      trainerName: finalTrainerName,
      price
    })
      .then((res) => {
        console.log("After Axios Request - Success:", res.data);
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Your payment was successful!',
        }).then(() => {
          navigate("/trainer");
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
   
  };


  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };


  return (
    <div>
      <Helmet>
        <title>Trainer || Booked</title>
      </Helmet>
      <div className="  bg-black gap-9 pt-28 max-w-full mx-auto">
      <div className="  mx-auto px-4">
        <div className="text-center  mb-8">
          <h2 className="text-xl py-3 text-center text-blue-500">Pricing</h2>
          <h1 className="text-5xl text-white py-3 font-bold">Our List Packages</h1>
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => handleBillingCycleChange('monthly')} 
              className={`px-4 py-2 rounded-l-full ${billingCycle === 'monthly' ? 'bg-white text-black' : 'bg-blue-600'}`}>
              Billed Monthly
            </button>
            <button 
              onClick={() => handleBillingCycleChange('yearly')} 
              className={`px-4 py-2 rounded-r-full ${billingCycle === 'yearly' ? 'bg-white text-black' : 'bg-blue-600'}`}>
              Billed Yearly
            </button>
          </div>  
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5 max-w-full mx-auto px-auto py-5">
       <div className="bg-gray-900 mt-6 max-h-[30rem] p-6 rounded-lg text-left">
            <h3 onClick={() => handleChoosePlan("Basic Package", selectedSlot)} className="text-lg text-left text-blue-500">Basic Package</h3>
            <div className="my-4">
              <h2 className="text-4xl text-white text-left font-bold">$25</h2>
              <p className="text-sm text-left text-white"> per month, billed annually</p>
            </div>
            <ul className="mb-6 text-base space-y-3">
              <li className='flex gap-4 text-white'> <FaRegCircleCheck />  Unlimited Gym Access</li>
              <li  className='flex gap-4 text-white'><FaRegCircleCheck />  2x Fitness Consultant</li>
              <li  className='flex gap-4 text-white'><FaRegCircleCheck />  Nutrition Tracking</li>
              <li  className='flex gap-4 text-white'> <FaRegCircleCheck /> 1x Free Supplement</li>
              <li  className='flex gap-4 text-white'> <FaRegCircleCheck /> 3 Days per week</li>
              <li  className='flex gap-4 text-white'> <FaRegCircleCheck /> Personal Trainer</li>
            </ul>
            <button onClick={() => handleChoosePlan("Basic Package", selectedSlot, 25)} className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>

          <div className="bg-blue-500 min-h-[32rem] py-9  px-5 rounded-lg text-left relative">
            <h3 onClick={() => handleChoosePlan("Mid Package", selectedSlot)} className="text-lg mt-5 text-white">Mid Package</h3>
            <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 rounded-bl-lg text-sm font-bold" >
              <p className='text-skew text-black'>Best Offer</p>
            </div>
            <div className="my-4">
              <h2 className="text-4xl text-white font-bold">$55</h2>
              <p className="text-sm text-white"> per month, billed annually</p>
            </div>
            <ul className="mb-6 space-y-3 text-base" >
              <li className='flex gap-4 text-white'><FaRegCircleCheck /> Unlimited Gym Access</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck /> 4x Fitness Consultant</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck /> Nutrition Tracking</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck /> 3x Free Supplement</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck /> 5 Days per week</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck /> Personal Trainer</li>
            </ul>
            <button onClick={() => handleChoosePlan("Mid Package", selectedSlot, 55)} className="bg-black mt-5 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>


          <div className="bg-gray-900 mt-6 max-h-[30rem] p-6 rounded-lg text-left">
            <h3 onClick={() => handleChoosePlan("Pro Package", selectedSlot)} className="text-lg text-blue-500">Pro Package</h3>
            <div className="my-4 ">
              <h2 className="text-4xl text-white font-bold">$75</h2>
              <p className="text-sm text-white"> per month, billed annually</p>
            </div>
            <ul className="mb-6 space-y-2">
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Unlimited Gym Access</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />7x Fitness Consultant</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Nutrition Tracking</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />5x Free Supplement</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Gym Card</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Personal Trainer</li>
            </ul>
            <button onClick={() => handleChoosePlan("Pro Package", selectedSlot, 75)} className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>


          <div className="bg-gray-900 mt-6 max-h-[30rem] p-6 rounded-lg text-left">
            <h3 onClick={() => handleChoosePlan("Athlete Package", selectedSlot)} className="text-lg text-blue-500">Athlete Package</h3>
            <div className="my-4">
              <span className="text-4xl text-white font-bold">$105</span>
              <span className="text-sm text-white"> per month, billed annually</span>
            </div>
            <ul className="mb-6 space-y-3">
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Unlimited Gym Access</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Free Clothes</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />All Training Program</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Free Fitness Consultant</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Free Supplement</li>
              <li className='flex gap-4 text-white'><FaRegCircleCheck />Gym Card</li>
            </ul>
            <button onClick={() => handleChoosePlan("Athlete Package", selectedSlot, 105)} className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>
       </div>
      </div>
    
    </div>
    </div>
    
  );
};

export default TrainerBooked;
