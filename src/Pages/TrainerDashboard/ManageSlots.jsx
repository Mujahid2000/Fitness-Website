import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { Button } from "flowbite-react";
import Email from "./Email";

const ManageSlot = () => {
  const [trainers, setTrainers] = useState([]);
  const [showEmail, setShowEmail] = useState(false);
  const [rejectionSubmitted, setRejectionSubmitted] = useState(false);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
const photo = (user?.displayName);
console.log(trainers);
  const { refetch, data = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/trainerBooked/${user?.displayName}`);
      return res.data;
    },
  });

  const handleRejectClick = () => {
    setShowEmail(true);
    setRejectionSubmitted(false); 
  };

  const handleSubmitEmail = () => {
    
    setShowEmail(false);
    setRejectionSubmitted(true); 
  };

  useEffect(() => {
    axios
      .get(`https://fitness-server-flax.vercel.app/trainerBooked/${user?.displayName}`)
      .then((res) => res.data)
      .then((data) => {
        setTrainers(data);
        refetch();
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [user?.displayName, refetch]);

  return (
    <div>
      <Helmet>
        <title>Dashboard || Manage Slots</title>
      </Helmet>
      <div className="overflow-x-auto max-w-full mx-auto">
        <table className="table-auto w-full mx-auto border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Package</th>
              <th className="py-2 px-4">Time Slots</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Reject</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item) => (
              <tr key={item._id} className="">
                <td className="py-2 px-4 text-center text-white">{item?.userName}</td>
                <td className="py-2 px-4 text-center text-white">{item?.userEmail}</td>
                <td className="py-2 px-4 text-center text-white">{item?.packageName}</td>
                <td className="py-2 px-4 text-center text-white">{item.selectedSlot}</td>
                <td className="py-2 px-4 text-center text-white">${item.price}</td>
                <td className="py-2 px-4 text-center text-white justify-center">
                  <Button onClick={handleRejectClick} text-white>Reject</Button>
                  {showEmail && !rejectionSubmitted && (
                    <div>
                      <Email />
                      <Button onClick={handleSubmitEmail}>Submit</Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSlot;
