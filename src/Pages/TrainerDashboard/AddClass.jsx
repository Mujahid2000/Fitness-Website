// AddClass.js

import axios from 'axios';
import  { useState } from 'react';

const AddClass = () => {
   

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const time = formData.get('time')
        const days = formData.get('days')
        const className = formData.get('className')
        const trainerName = formData.get('trainerName');

        const data = {time, days, className, trainerName};
        axios.post()
       
    };

    return (
        <div className=" h-[86.1vh] justify-center items-center mx-auto mt-8">
            <h2 className="text-2xl text-white text-center font-bold mb-4">Add Class</h2>
            <div className="">
  <form onSubmit={handleSubmit} className="px-8 py-10   border-2 border-blue-400 rounded-lg">
    <div className="flex flex-col md:flex-row gap-4 items-center">
    <select required name="time" id="select" className="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold  shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
        <option  className="font-semibold text-black">Select Time</option>
        <option  className="font-semibold text-black">08:00 AM</option>
        <option  className="font-semibold text-black">11:00 AM</option>
        <option  className="font-semibold text-black">12:00 PM</option>
        <option  className="font-semibold text-black">09:00 AM</option>
        <option  className="font-semibold text-black">10:00 AM</option>
        <option  className="font-semibold text-black">01:00 PM</option>
      </select>
      <select required name="days" id="select" className="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold  shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
        <option  className="font-semibold text-black">Select Days</option>
        <option  className="font-semibold text-black">Saturday</option>
        <option  className="font-semibold text-black">Sunday</option>
        <option  className="font-semibold text-black">Monday</option>
        <option  className="font-semibold text-black">Tuesday</option>
        <option  className="font-semibold text-black">Wednesday</option>
        <option  className="font-semibold text-black">Thursday</option>
      </select>
    </div>
    <div className="my-6 flex flex-col md:flex-row gap-4 items-center">
    <input required type="Name" name="className" className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-black focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Class Name *" />
    <input required type="Name" name="trainerName" className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-black focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Trainer Name *" />
    </div>
    
    <div className=" pt-10 text-center md:text-right">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-6 py-3 hover:bg-blue-500 text-sm font-semibold text-white">Add Class</button>
    </div>
  </form>
</div>
        </div>
    );
};

export default AddClass;
