import axios from "axios";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaEnvelope, FaFacebook, FaFacebookF, FaLinkedin, FaPhoneAlt, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const TrainerDetails = (book) => {
  const { _id } = useLoaderData({});
  const [booking, setBooking] = useState([]);
  const [myData, setData] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
console.log( selectedTime);

  useEffect(() => {
    axios.get('https://gym-server-orpin.vercel.app/trainerBooked')
      .then(res => res.data)
      .then(data => setBooking(data)) 
      .catch(error => console.error('Error fetching booked slots:', error));
  }, []);

  

  useEffect(() => {
    if (_id) {
      axios.get(`https://gym-server-orpin.vercel.app/trainer/${_id}`)
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

  

  const handleSlotChange = (event) => {
    // Update the selected time when user selects a value
    setSelectedTime(event.target.value);
  };

  const handleSlotClick = (e) => {
    e.preventDefault();
    // Here you can access the selectedTime state
    console.log("Selected Time:", selectedTime);
    // You can now use the selectedTime in your form submission or any logic
  };


  return (
    <div className="pt-20 bg-black pb-5 px-5">
      <div className="flex justify-end">
        <Link to="/trainerApply">
        <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-blue-500 bg-white px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Become A Trainer</span></button>
        </Link>
      </div>
      



<div className="bg-black py-10 px-2 lg:px-20">
      <div className="bg-black shadow-lg rounded-lg p-3 md:p-8 flex flex-col lg:flex-row">
        {/* Left Section - Trainer Image */}
        <div className="flex justify-center items-center lg:w-2/3">
          <img
            src={myData.image}
            alt="Trainer"
            className="rounded-lg bg-white shadow-lg"
          />
        </div>

        {/* Right Section - Trainer Info */}
        <div className="lg:w-2/3 lg:pl-10 mt-8 lg:mt-0">
          <h1 className="text-2xl font-bold text-white">{myData.name}</h1>
          <p className="text-red-500 font-semibold mt-1">{myData.title}</p>
          <p className="text-white text-justify mt-4 leading-relaxed">
            Fitness and gym culture have become integral components of a modern, 
            health-conscious lifestyle. Engaging in regular fitness activities and 
            gym workouts offers a multitude of physical, mental, and social benefits. 
            The gym, often a fitness sanctuary, is equipped with an array of cardio 
            and strength-training equipment, providing a dynamic space for individuals 
            to pursue their fitness goals.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-2">
            <p className="text-white">
              <strong>Phone Number:</strong> +1 863 2564 3654
            </p>
            <p className="text-white">
              <strong>Email:</strong> {myData.email}
            </p>
            <p className="text-white">
              <strong>Website:</strong>{" "}
              <a href="https://fitness-website-amber.vercel.app/" className="text-blue-500 hover:underline">
              https://fitness-website-amber.vercel.app/
              </a>
            </p>
            <p className="text-white">
              <strong>Address:</strong> 12546 LK Road, United States
            </p>
            <p className="text-white">
              <strong>Experience:</strong> {myData.experience} Years+
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-blue-400 text-white rounded-full shadow hover:bg-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex justify-center items-center bg-green-500 text-white rounded-full shadow hover:bg-green-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Time Schedule and Appointment */}
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        {/* Time Schedule */}
        <div className="bg-black shadow-lg rounded-lg p-6 lg:w-1/2">
          <h2 className="text-xl font-bold text-white border-b pb-2">My Time Schedule</h2>
          <ul className="mt-4 space-y-2">
            {
              Object?.keys(myData.schedule)?.slice(0,2).map(day =>(
              <li key={day} className="flex justify-between text-white">
              <span>Mon - Fri:</span>
              <span>{myData?.schedule[day]}</span>
            </li>
              ))
            }

            {
              Object?.keys(myData.schedule)?.slice(2,)?.map(day =>(
              <li key={day} className="flex justify-between text-white">
              <span>Saturday</span>
              <span>{myData?.schedule[day]}</span>
            </li>
              ))
            }
            
            
          </ul>
        </div>

        {/* Book Appointment */}
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 lg:w-1/2">
          <h2 className="text-xl font-bold text-white border-b pb-2">Book An Appointment</h2>
          <form onSubmit={handleSlotClick} className="mt-4 space-y-4">
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4">
              <div className="flex items-center border rounded-lg px-3 py-2 w-full gap-2">
                <FaUser className="text-white" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-2 bg-black text-white focus:outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 w-full gap-2">
                <FaEnvelope className="text-white" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-2 bg-black text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4">
              <div className="flex items-center border rounded-lg gap-2 px-3 py-2 w-full">
                <FaPhoneAlt className="text-white" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-black pl-2 text-white focus:outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 gap-2 w-full">
                <FaCalendarAlt className="text-white" />
                <input
                  type="date"
                  className="w-full pl-2 bg-black text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-3 gap-2 py-2 w-full">
              <FaClock className="text-white" />
            
              <select
            id="appointment-time"
            className="w-full pl-2 text-white bg-black focus:outline-none"
            value={selectedTime} // Bind the selected value to the state
            onChange={handleSlotChange} // Update state on selection change
          >
            <option value="">Select</option>
            {Object.keys(myData.schedule).map((day) => (
              <option key={day} value={myData.schedule[day]}>
                {myData.schedule[day]}
              </option>
            ))}
          </select>
            </div>
            {
              selectedTime ? 
              (
<Link to={`/trainerBooked/${selectedTime}/${myData?.name}`}>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              BOOK AN APPOINTMENT
            </button>
            </Link>
              ):
              (
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              BOOK AN APPOINTMENT
            </button>
              )
            }
            
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrainerDetails;
