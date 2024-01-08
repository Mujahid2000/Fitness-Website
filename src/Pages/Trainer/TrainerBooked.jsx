import { Card } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { FaRegCircleDot } from "react-icons/fa6";
import {  useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const TrainerBooked = () => {
  const { user } = useContext(AuthContext);
  const userEmail = (user.email)
  // console.log(userEmail);
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const { slot, name } = useParams();

  const handleChoosePlan = (packageName, selectedSlot, price) => {
    const finalSelectedSlot = slot || selectedSlot;
    const finalTrainerName = name || name;

    if (finalSelectedSlot === null) {
      console.error("No time slot selected.");
      return;
    }

    axios.post("https://fitness-server-iota.vercel.app/trainerBooked", {
      user,
      packageName: packageName,
      selectedSlot: finalSelectedSlot,
      trainerName: finalTrainerName,
      price
    })
      .then((res) => {
        console.log("After Axios Request - Success:", res.data);
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Your payment was successful!',
        }).then(() => {
          navigate("/trainer");
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };


  return (
    <div>
      <Helmet>
                <title>Trainer || Booked</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-7 max-w-6xl mx-auto">
      <div>
        <Card className="max-w-sm">
          <h5
            className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400"
            onClick={() => handleChoosePlan("Standard plan", selectedSlot)}
          >
            Silver plan
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">99</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                1 Trainer Support
              </span>
            </li>

            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                1 Hours Class
              </span>
            </li>
            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Integration help
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            onClick={() => handleChoosePlan("Silver plan", selectedSlot, 99)}
          >
            Join Now
          </button>
        </Card>
      </div>
      <div>
        <Card className="max-w-sm">
          <h5
            className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400"
            onClick={() => handleChoosePlan("Standard plan", selectedSlot)}
          >
            Gold plan
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">199</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                2 team members
              </span>
            </li>

            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                2 Hours Class 
              </span>
            </li>
            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Integration help
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            onClick={() => handleChoosePlan("Gold plan", selectedSlot, 199)}
          >
            Join Now
          </button>
        </Card>
      </div>
      <div>
        <Card className="max-w-sm">
          <h5
            className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400"
            onClick={() => handleChoosePlan("Standard plan", selectedSlot)}
          >
            Diamond plan
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">299</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                4 team members
              </span>
            </li>

            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                3 Hours Class 
              </span>
            </li>
            <li className="flex space-x-3">
              <FaRegCircleDot />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Integration help
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            onClick={() => handleChoosePlan("Diamond plan", selectedSlot, 299)}
          >
            Join Now
          </button>
        </Card>
      </div>
    </div>
    </div>
    
  );
};

export default TrainerBooked;
