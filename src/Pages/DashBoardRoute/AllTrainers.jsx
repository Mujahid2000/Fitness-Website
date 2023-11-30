import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const axiosSecure = UseAxiosSecure();
   
    const {refetch, data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
  
    axios
      .get("https://fitness-server-iota.vercel.app/trainer")
      .then((res) => res.data)
      .then((data) => {
        setTrainers(data)
        refetch()
      })
      .catch((error) => console.error("Error fetching data:", error));

  return (
      <div>
        <Helmet>
          <title>Dashboard || All Trainers</title>
        </Helmet>
<div className="bg-[#9b59b6] h-screen p-6">
      <h2 className="text-5xl text-center mb-6 mt-6 text-white font-serif font-semibold">
        All Trainers
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#9b59b6] text-white">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Salary</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer._id} className="bg-gray-100">
                <td className="py-3 px-4 border-b text-center">{trainer.name}</td>
                <td className="py-3 px-4 border-b text-center">
                  {trainer.title}
                </td>
                
                <td className="py-3 px-4 border-b text-center">
                <Link to={`/dashboard/payment/${trainer._id}/${trainer.salary}`}>
                <button className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                  Pay ${trainer.salary}
                </button>
              </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
  );
};

export default AllTrainers;
