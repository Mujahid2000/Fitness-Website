// AddClass.js

import React, { useState } from 'react';

const AddClass = () => {
    // State variables to hold form data
    const [time, setTime] = useState('');
    const [trainerName, setTrainerName] = useState('');
    const [className, setClassName] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission logic (e.g., sending data to backend)
        console.log('Submitted:', { time, trainerName, className });
        // You can clear the form inputs after submission if needed
        setTime('');
        setTrainerName('');
        setClassName('');
    };

    return (
        <div className="container h-[89.5vh] justify-center items-center mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Add Class</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md">
                <div className="mb-4">
                    <label htmlFor="time" className="block text-white font-semibold mb-2">Time</label>
                    <input 
                        type="datetime-local" 
                        id="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        className="w-full bg-slate-500 text-white px-3 py-2 border  rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="trainerName" className="block text-white font-semibold mb-2">Trainer Name</label>
                    <input 
                        type="text" 
                        id="trainerName" 
                        value={trainerName} 
                        onChange={(e) => setTrainerName(e.target.value)} 
                        className="w-full bg-slate-500 px-3 py-2 border  rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="className" className="block text-white font-semibold mb-2">Class Name</label>
                    <input 
                        type="text" 
                        id="className" 
                        value={className} 
                        onChange={(e) => setClassName(e.target.value)} 
                        className="w-full bg-slate-500 px-3 py-2 border  rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required 
                    />
                </div>
                <div className="flex justify-end">
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
