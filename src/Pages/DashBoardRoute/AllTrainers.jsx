import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import axios from "axios";

const AllTrainers = () => {
  const axiosSecure = UseAxiosSecure();
  const [trainerData, setTrainerData] = useState(null); // Correctly initialized at the top
  const [token, setToken] = useState(localStorage.getItem("deleteCartAfterCheckout"));

  // Fetch trainers using React Query
  const { data: trainers = [], isLoading, isError } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("https://gym-server-orpin.vercel.app/trainer");
      return res.data;
    },
    staleTime: 120000, // Cache data for 2 minutes to reduce unnecessary refetching
  });

  // Proceed with payment
  const proceedData = async (trainer) => {
    try {
      // Send the payment data to the server to get the checkout URL
      const res = await axiosSecure.post("http://localhost:5000/payment", { trainerData: trainer });

      if (res.data.url) {
        localStorage.setItem("deleteCartAfterCheckout", "true");
        window.location = res.data.url; // Redirect to Stripe checkout
      } else {
        console.error("Error: Checkout URL not provided in response");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading trainers...</div>;
  }

  if (isError) {
    return <div>Error loading trainers. Please try again later.</div>;
  }

  // useEffect to send trainer data to the backend

//     const trainerPaymentData = async () => {
//       if (token && trainerData) { // Make sure token and trainerData are available
//         try {
//           // Send trainer data to another endpoint (paymentData)
//           const res = await axios.post("http://localhost:5000/paymentData", trainerData);
//           console.log("Payment data sent successfully:", res.data);
//           if(res.data.success){
//             localStorage.removeItem('deleteCartAfterCheckout'); 
//           }
//         } catch (error) {
//           console.error("Error sending payment data:", error);
//         }
//       }
//     };

//     trainerPaymentData();
//  // Only trigger when token or trainerData changes

  return (
    <div>
      <Helmet>
        <title>All Trainers</title>
      </Helmet>
      <div className="h-full p-6 max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-6 mt-6 text-white font-serif font-semibold">
          All Trainers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-[#878484] text-white">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Salary</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((trainer) => (
                <tr key={trainer._id} className="bg-gray-100">
                  <td className="py-3 px-4 border-b text-center">{trainer.name}</td>
                  <td className="py-3 px-4 border-b text-center">{trainer.title}</td>
                  <td className="py-3 px-4 border-b text-center">${trainer.salary}</td>
                  <td className="py-3 px-4 border-b text-center">
                    <button
                      onClick={() => {
                        // Call the proceedData function and update state
                        proceedData({
                          id: trainer._id,
                          name: trainer.name,
                          salary: trainer.salary,
                          email: trainer.email,
                        });
                        
                        // Update trainer data in state
                        setTrainerData({
                          id: trainer._id,
                          name: trainer.name,
                          salary: trainer.salary,
                          email: trainer.email,
                        });
                      }}
                      className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600"
                    >
                      Pay ${trainer.salary}
                    </button>
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
