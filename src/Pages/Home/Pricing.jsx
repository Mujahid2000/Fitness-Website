import  { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <div className="text-center  mb-8">
          <h2 className="text-xl py-3 text-blue-500">Pricing</h2>
          <h1 className="text-5xl py-3 font-bold">Our List Packages</h1>
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => handleBillingCycleChange('monthly')} 
              className={`px-4 py-2 rounded-l-full ${billingCycle === 'monthly' ? 'bg-white text-black' : 'bg-gray-800'}`}>
              Billed Monthly
            </button>
            <button 
              onClick={() => handleBillingCycleChange('yearly')} 
              className={`px-4 py-2 rounded-r-full ${billingCycle === 'yearly' ? 'bg-white text-black' : 'bg-gray-800'}`}>
              Billed Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 mt-6 max-h-[30rem] p-6 rounded-lg text-left">
            <h3 className="text-lg text-left text-blue-500">Basic Package</h3>
            <div className="my-4">
              <h2 className="text-4xl text-left font-bold">$25</h2>
              <p className="text-sm text-left"> per month, billed annually</p>
            </div>
            <ul className="mb-6 text-base space-y-2">
              <li className='flex gap-4'> <FaRegCircleCheck />  Unlimited Gym Access</li>
              <li  className='flex gap-4'><FaRegCircleCheck />  2x Fitness Consultant</li>
              <li  className='flex gap-4'><FaRegCircleCheck />  Nutrition Tracking</li>
              <li  className='flex gap-4'> <FaRegCircleCheck /> 1x Free Supplement</li>
              <li  className='flex gap-4'> <FaRegCircleCheck /> 3 Days per week</li>
              <li  className='flex gap-4'> <FaRegCircleCheck /> Personal Trainer</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>

          <div className="bg-blue-500 min-h-[33rem] py-9  px-5 rounded-lg text-left relative">
            <h3 className="text-lg mt-5 text-white">Mid Package</h3>
            <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 rounded-bl-lg text-sm font-bold" >
              <p className='text-skew'>Best Offer</p>
            </div>
            <div className="my-4">
              <h2 className="text-4xl font-bold">$55</h2>
              <p className="text-sm"> per month, billed annually</p>
            </div>
            <ul className="mb-6 space-y-2 text-base" >
              <li className='flex gap-4'><FaRegCircleCheck /> Unlimited Gym Access</li>
              <li className='flex gap-4'><FaRegCircleCheck /> 4x Fitness Consultant</li>
              <li className='flex gap-4'><FaRegCircleCheck /> Nutrition Tracking</li>
              <li className='flex gap-4'><FaRegCircleCheck /> 3x Free Supplement</li>
              <li className='flex gap-4'><FaRegCircleCheck /> 5 Days per week</li>
              <li className='flex gap-4'><FaRegCircleCheck /> Personal Trainer</li>
            </ul>
            <button className="bg-black mt-9 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>

          <div className="bg-gray-900 mt-6 max-h-[30rem] p-6 rounded-lg text-left">
            <h3 className="text-lg text-blue-500">Pro Package</h3>
            <div className="my-4 ">
              <h2 className="text-4xl font-bold">$75</h2>
              <p className="text-sm"> per month, billed annually</p>
            </div>
            <ul className="mb-6 space-y-2">
              <li className='flex gap-4'><FaRegCircleCheck />Unlimited Gym Access</li>
              <li className='flex gap-4'><FaRegCircleCheck />7x Fitness Consultant</li>
              <li className='flex gap-4'><FaRegCircleCheck />Nutrition Tracking</li>
              <li className='flex gap-4'><FaRegCircleCheck />5x Free Supplement</li>
              <li className='flex gap-4'><FaRegCircleCheck />Gym Card</li>
              <li className='flex gap-4'><FaRegCircleCheck />Personal Trainer</li>
            </ul>
            <button className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>

          <div className="bg-gray-900 mt-6 max-h-[30rem] p-6 rounded-lg text-left">
            <h3 className="text-lg text-blue-500">Athlete Package</h3>
            <div className="my-4">
              <span className="text-4xl font-bold">$105</span>
              <span className="text-sm"> per month, billed annually</span>
            </div>
            <ul className="mb-6 space-y-3">
              <li className='flex gap-4'><FaRegCircleCheck />Unlimited Gym Access</li>
              <li className='flex gap-4'><FaRegCircleCheck />Free Clothes</li>
              <li className='flex gap-4'><FaRegCircleCheck />All Training Program</li>
              <li className='flex gap-4'><FaRegCircleCheck />Free Fitness Consultant</li>
              <li className='flex gap-4'><FaRegCircleCheck />Free Supplement</li>
              <li className='flex gap-4'><FaRegCircleCheck />Gym Card</li>
            </ul>
            <button className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
