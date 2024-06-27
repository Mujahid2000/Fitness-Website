import axios from "axios";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const TrainerDetails = (book) => {
  const { _id } = useLoaderData({});
  const [booking, setBooking] = useState([]);

  const [myData, setData] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  console.log(myData);

  useEffect(() => {
    axios.get('https://fitness-server-seven.vercel.app/trainerBooked')
      .then(res => res.data)
      .then(data => setBooking(data)) 
      .catch(error => console.error('Error fetching booked slots:', error));
  }, []);

  

  useEffect(() => {
    if (_id) {
      axios.get(`https://fitness-server-seven.vercel.app/trainer/${_id}`)
        .then(res => res.data)
        .then(data => setData(data))
        .catch(error => console.error('Error fetching trainer data:', error));
    } else {
      console.error('Trainer ID not found in route params');
    }
  }, [_id]);

  if (!myData) {
    return <div><Spinner color="pink" aria-label="Pink spinner example" /></div>;
  }

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };



  return (
    <div className="pt-20 bg-black pb-5 px-5">
      <div className="flex justify-end">
        <Link to="/trainerApply">
        <button className="bg-blue-500 py-3 px-5 rounded-md text-white hover:bg-blue-700 ...">
  Become a Trainer
</button>
        </Link>
      </div>
      
      <div className="">
  <div className="relative mx-auto mt-20 mb-20 max-w-lg overflow-hidden rounded-xl bg-blue-500/60 py-32 text-center shadow-xl shadow-blue-600">
    <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Book an appointment</h1>
    <p className="mt-6 text-lg text-white">Get an appointment with our experienced accountants</p>
    <img className="absolute rounded-md top-0 left-0 z-10 max-h-[35rem] w-full " src={myData.image} alt="" />
  </div>

  <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
    

    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-blue-700">Select a date</p>
      <div className="relative mt-4 w-56">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg aria-hidden="true" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </div>
        <input  autoFocus="autofocus" type="date" className="datepicker-input block w-full rounded-lg border border-blue-300 bg-blue-50 p-2.5 pl-10 text-blue-800 outline-none ring-opacity-30 placeholder:text-blue-800 focus:ring focus:ring-blue-300 sm:text-sm" placeholder="Select date" />
      </div>
    </div>

    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-blue-700">Select a time</p>
      <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-5xl">
   
             {Object.keys(myData.schedule).map(day => (
            
                <button  className="rounded-lg bg-blue-100 px-4 py-3 font-medium text-blue-900 active:scale-95" key={day}> <Link to={`/trainerBooked/${myData.schedule[day]}/${myData?.name}`}><button onClick={() => handleSlotClick(day)} className="text-white"></button> {myData.schedule[day]}</Link></button>
             
              ))}
        
      </div>
    </div>


  </div>
</div>
    </div>
  );
};

export default TrainerDetails;
