import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const Subscription = () => {
  const [subscribe, setSubscribe] = useState([]);


  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({
      name: formData.get('name'),
      email: formData.get('email')
    });
    
    axios.post('https://fitness-server-iota.vercel.app/subscribe', {
      name: formData.get('name'),
      email: formData.get('email')
    })
    .then(res => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Subscription done",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


    return (
      <div className="mt-10 px-5">
  <h2 className="text-5xl uppercase font-mono font-semibold text-center mb-8">
    Subscribe Now <span className="text-5xl font-bold text-blue-500">&</span> Join with Us
  </h2>
  <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-center items-center">
    <div className="md:w-1/2 h-full">
      <img
        src="https://i.ibb.co/Y3Msrpn/contact.png"
        alt="Contact us"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="w-full max-w-md p-4 bg-sky-400 px-9 py-12 md:py-24 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-blue-800 text-white font-medium rounded-md py-3 w-full transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  </div>
</div>



      
    );
};

export default Subscription;