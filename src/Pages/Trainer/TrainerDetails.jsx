import axios from "axios";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const TrainerDetails = (book) => {
  const { _id } = useLoaderData({});
  const [booking, setBooking] = useState([]);
  console.log(booking);
  const [myData, setData] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  

  useEffect(() => {
    axios.get('https://fitness-server-iota.vercel.app/trainerBooked')
      .then(res => res.data)
      .then(data => setBooking(data)) 
      .catch(error => console.error('Error fetching booked slots:', error));
  }, []);

  

  useEffect(() => {
    if (_id) {
      axios.get(`https://fitness-server-iota.vercel.app/trainer/${_id}`)
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
    <div className=" mx-auto mt-9">
      <div className="justify-end flex">
        <Link to={'/trainerApply'}><Button color="purple" className="p-3 text-xl mb-5 mt-3">Become a Trainer</Button></Link>
        </div>
        <div key={myData._id} className="bg-white  flex overflow-hidden shadow rounded-lg">
        
        <div className="flex">
        <div>
            <img className="w-full h-96 object-cover object-center" src={myData.image} alt='' />
        </div>
        <div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{myData?.name}</h2>
          <p className="text-gray-600 mb-4">{myData.title}</p>
          <div className="mb-4">
      <p className="text-gray-700">
        <strong>Available Time Slot: Everyday-</strong>
      </p>
      {Object.keys(myData.schedule).map((slot, index) => {
      const bookedSlots = Object.values(booking).map(bookedSlot => bookedSlot.selectedSlot);
      const isSlotBooked = bookedSlots.includes(myData.schedule[slot]);
      return (
        <Link
          to={`/trainerBooked/${myData.schedule[slot]}/${myData?.name}`}
          key={index}
          onClick={() => handleSlotClick(slot)}
          disabled={selectedSlot !== null || isSlotBooked}>
          <p className={selectedSlot ? "disabled-slot" : ""}>{index + 1}. {myData.schedule[slot]}</p>
        </Link>
      );
      })}  
    </div>
        <p className="text-gray-700">{myData.about}</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default TrainerDetails;
