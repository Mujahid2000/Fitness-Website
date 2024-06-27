import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Subscription = () => {


  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = 'Mujahidul Islam';
    const email = formData.get("email");

    // Validate if name and email are present
    if (!name || !email) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please enter your name and email",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    console.log({
      name: name,
      email: email,
    });

    try {
      const response = await axios.post("https://gym-server-orpin.vercel.app/subscribe", {
        name: name,
        email: email,
      });

      console.log(response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Subscription done",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Subscription failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="bg-[#000] px-5 pb-20">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
    <div
        className="relative isolate overflow-hidden bg-[#097FD9] px-6 py-20 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-20">
       
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe our fitness tips
        </h2>

        <p className="mx-auto  max-w-xl text-center text-lg leading-8 text-white">
        Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.
        </p>

        <form onSubmit={handleSubscribe} className="mx-auto mt-10 flex max-w-md gap-x-4">

            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white 5 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email"/>

            <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Subscribe</button>
        </form>

        

    </div>
</div>
      </div>
  
  );
};

export default Subscription;
