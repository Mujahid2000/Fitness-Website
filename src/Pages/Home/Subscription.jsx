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
      <div className="mt-6">
        <h2 className="text-5xl font-semibold text-center mb-6">Subscribe Now <span className="text-6xl font-bold text-blue-500">& </span>Join with Us</h2>
        <div className="mt-5 border p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
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
                    className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md py-2.5 w-full"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
      </div>
      
    );
};

export default Subscription;