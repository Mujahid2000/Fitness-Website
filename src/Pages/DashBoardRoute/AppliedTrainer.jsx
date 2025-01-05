import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const TrainerModal = ({ trainer, onClose, onAction }) => (
    <AnimatePresence>
      {trainer && (
        <>
          {/* Modal Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
  
          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full">
              {/* Modal Header */}
              <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h2 className="text-lg font-semibold">Applicant Trainer Details</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 focus:outline-none"
                >
                  ✖
                </button>
              </div>
  
              {/* Modal Body */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Trainer Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex justify-center"
                >
                  <img
                    className="w-full h-full object-cover rounded-md shadow-md"
                    src={trainer.image || "/default-trainer.jpg"}
                    alt={trainer.name}
                  />
                </motion.div>
  
                {/* Trainer Details */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📧</span> {trainer.email}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📅</span> Age: {trainer.age}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">🏷️</span> Title:{" "}
                    {trainer.title || "N/A"}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">💰</span> Salary:{" "}
                    {trainer.salary ? `$${trainer.salary}` : "N/A"}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    About: {trainer.about || "No additional information provided."}
                  </p>
                </motion.div>
              </div>
  
              {/* Modal Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-gray-100 p-4 flex justify-end gap-4 rounded-b-lg"
              >
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                  onClick={() => {
                    onAction(trainer._id, "accept");
                    onClose();
                  }}
                >
                  Accept
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                  onClick={onClose}
                >
                  Decline
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
  

const AppliedTrainer = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const axiosSecure = UseAxiosSecure();

  const { data: trainers = [], refetch, isError, error } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/trainerApply");
      return res.data;
    },
  });

  const handleAction = async (id, action) => {
    try {
      if (action === "accept") {
        await axiosSecure.patch(`/trainerApply/${id}`);
        Swal.fire({
          title: "Success!",
          text: "Trainer confirmation successfully updated.",
          icon: "success",
          confirmButtonText: "Done",
        });
      } else {
        await axiosSecure.delete(`/trainerApply/${id}`);
        Swal.fire({
          title: "Trainer Removed",
          text: "Trainer has been declined and removed.",
          icon: "info",
          confirmButtonText: "OK",
        });
      }
      refetch();
    } catch (err) {
      console.error(`Error during ${action}:`, err);
      Swal.fire({
        title: "Error",
        text: `Failed to ${action} trainer. Please try again.`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard || Applied Trainers</title>
      </Helmet>
      <div className="max-w-7xl min-h-screen bg-black mx-auto p-6">
  <div className="flex flex-col px-4">
    <div className="overflow-x-auto">
      <div className="py-2 inline-block min-w-full">
        <div className="shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-100 mx-auto">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wide"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wide"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wide"
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wide"
                >
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {trainers.map((trainer, index) => (
                <tr
                  key={trainer._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition duration-200`}
                >
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                    {trainer.name}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-600">
                    {trainer.email}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-600">
                    {trainer.age}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                      onClick={() => setSelectedTrainer(trainer)}
                    >
                      Update Role
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Error Message */}
          {isError && (
            <div className="p-4 text-center text-red-600 bg-red-100">
              {error?.message || "Failed to fetch trainers."}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onAction={handleAction}
      />
    </div>
  );
};

export default AppliedTrainer;
