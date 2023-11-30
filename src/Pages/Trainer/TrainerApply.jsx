import { data } from "autoprefixer";
import axios from "axios";
import {  useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const skillsOptions = ['Self-Development', 'Positivity', 'Extensive Knowledge of Fitness', 'Skills in Communication', 'Inspiring Others', 'Being Approachable and Friendly'];

const TrainerApply = () => {
    const [applyData, setApplyData] = useState([]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubscribe = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let mySchedule = formData.get('schedule');
        // console.log(mySchedule);
        let scheduleArray = mySchedule ? mySchedule.split(',') : [];
        let myScheduleObj = {}
        scheduleArray.forEach((d,i)=>{
            myScheduleObj[i] = d
        })
        const schedule = { availableTimeDay: scheduleArray };


        // Create the obj1 object
        // const clientTime = {  scheduleArray };
        console.log({
        name: formData.get('name'),
        age: formData.get('age'),
        image: formData.get('image'),
        skills: skillsOptions.filter(skill => formData.get(skill)),
        availableTimeWeek: formData.get('availableTimeWeek'),
        // availableTimeDay: formData.get('availableTimeDay'),
        schedule,
        salary: formData.get('salary'),
        otherInfo: formData.get('otherInfo'),
        role : 'member'
    });

    axios.post('http://localhost:5050/trainerApply', {
        name: formData.get('name'),
        age: formData.get('age'),
        image: formData.get('image'),
        skills: skillsOptions.filter(skill => formData.get(skill)),
        availableTimeWeek: formData.get('availableTimeWeek'),
        schedule: myScheduleObj,
        about: formData.get('about'),
        role : 'member',
        email: user.email,
        title: 'FITNESS INSTRUCTOR',
        salary: formData.get('salary')
    })
    .then(res => {
        console.log(res.data);
        Swal.fire({
            title: 'Success!',
            text: 'Application submitted successfully',
            icon: 'success',
            confirmButtonText: 'OK',
        });
        navigate('/trainer')
    })
    .catch(error => {
        console.error('Error:', error);
    });
    };
    



return (
    <div>
        <Helmet>
            <title>Fitness || Apply</title>
        </Helmet>
<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto p-6 bg-[#9cf] rounded-md shadow-md mt-4 mb-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Application Form</h2>
        <form onSubmit={handleSubscribe} className="bg-[#9cf]">
            <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                Full Name
            </label>
            <input
                type="text"
                id="fullName"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
            />
            </div>
            <div className="mb-4 flex items-center space-x-4">
            <div className="w-1/2">
                <label htmlFor="age" className="block text-sm font-medium text-gray-600">
                Age
                </label>
                <input
                type="number"
                id="age"
                name="age"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
                />
            </div>
            <div className="w-1/2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                Profile Image URL
                </label>
                <input
                type="text"
                id="image"
                name="image"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
                />
            </div>
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Skills</label>
            <div className="flex items-center flex-wrap">
                {skillsOptions.map((skill) => (
                <div key={skill} className="mb-2 mr-4">
                    <input name={skill} type="checkbox" id={skill} className="mr-2" />
                    <label htmlFor={skill} className="text-sm text-gray-700">
                    {skill}
                    </label>
                </div>
                ))}
            </div>
            </div>
            <div className="mb-4">
            <label htmlFor="availableTimeWeek" className="block text-sm font-medium text-gray-600">
                Available Time in a week
            </label>
            <input
                type="text"
                id="availableTimeWeek"
                name="availableTimeWeek"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="schedule" className="block text-sm font-medium text-gray-600">
                Available time in a day
            </label>
            <input
                type="text"
                id="schedule"
                name="schedule"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
            />
            </div>
            <div className="mb-4 flex">

            <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
                Salary
            </label>
            <input
                type="number"
                id="salary"
                name="salary"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
            />
            </div>
            <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
                Salary
            </label>
            <input
                type="number"
                id="salary"
                name="salary"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
            />
            </div>
            
            </div>
            <div className="mb-4">
            <label htmlFor="about" className="block text-sm font-medium text-gray-600">
                Other Info
            </label>
            <textarea
                id="about"
                name="about"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            </div>
            <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
            Apply
            </button>
        </form>
        </div>
    </div>
    </div>
    );
};

export default TrainerApply;
