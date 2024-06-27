import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaRegUser,
  FaCog,
  FaListAlt,
  FaHeart,
  FaPlusSquare,
  FaRegCalendarAlt,
  FaBalanceScale,
  FaUserCheck,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import UseAdmin from "../../Hooks/UseAdmin";
import UseTrainer from "../../Hooks/UseTrainer";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);
  const [isAdmin] = UseAdmin();

  const [isTrainer] = UseTrainer();
  const location = useLocation();
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close sidebar on route change
    setOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="flex h-screen bg-gray-100">
        <div
          ref={sidebarRef}
          className={`${
            open
              ? "translate-x-0 duration-300"
              : "-translate-x-full duration-300"
          } fixed z-50 h-screen flex flex-col w-64 bg-gray-800 transition-transform ease-in-out`}
        >
          <div className="flex gap-3 items-center justify-center h-16 bg-gray-900">
            <img
              src="https://i.ibb.co/pPQVxSw/Screenshot-2024-06-16-214828-removebg-preview.png"
              alt=""
              className="w-6 h-6"
            />
            <span className="text-white font-bold uppercase">Gym Center</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex-1 px-2 py-4 bg-gray-800">
              <ul className="grid grid-cols-1 gap-3 p-4 text-white text-center mt-3">
                <li>
                  <NavLink
                    to="/"
                    className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#008080] items-center gap-5"
                  >
                    <FaHome />{" "}
                    <h3
                      className={`${
                        open ? "text-base text-white font-mono" : "hidden"
                      }`}
                    >
                      Home
                    </h3>
                  </NavLink>
                </li>
                {isAdmin ? (
                  // Admin Dashboard
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/allUsers"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-lime-600 items-center gap-5"
                      >
                        <FaUsers />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          All Users
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/allSubscriber"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5"
                      >
                        <FaUsers />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          All Subscriber
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/allTrainers"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#9b59b6] items-center gap-5"
                      >
                        <FaUserTie />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          All Trainers
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/appliedTrainers"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#FFA500] items-center gap-5"
                      >
                        <FaUserCheck />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Applied Trainer
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/balance"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#555555] items-center gap-5"
                      >
                        <FaBalanceScale />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Balance
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5"
                      >
                        <FaCog />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Profile Settings
                        </h3>
                      </NavLink>
                    </li>
                  </>
                ) : isTrainer ? (
                  // Trainer Dashboard
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/manageSlots"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#3498db] hover:shadow-lg focus:bg-[#3498db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2980b9] active:shadow-lg rounded-lg p-3 bg-[#2c3e50] items-center gap-5"
                      >
                        <FaRegCalendarAlt />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Manage Slots
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manageMember"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#e74c3c] hover:shadow-lg focus:bg-[#e74c3c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c0392b] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5"
                      >
                        <FaRegUser />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Manage Member
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addNewForum"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#27ae60] hover:shadow-lg focus:bg-[#27ae60] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2ecc71] active:shadow-lg rounded-lg p-3 bg-[#16a085] items-center gap-5"
                      >
                        <FaPlusSquare />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Add New Forum
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addClass"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#f39c12] hover:shadow-lg focus:bg-[#f39c12] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d35400] active:shadow-lg rounded-lg p-3 bg-[#f1c40f] items-center gap-5"
                      >
                        <FaPlusSquare />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          {" "}
                          Add New Class
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5"
                      >
                        <FaCog />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Profile Settings
                        </h3>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  // User Dashboard
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/activityLog"
                        className="flex text-white leading-normal shadow-md transition duration-150  ease-in-out hover:bg-[#8e44ad] hover:shadow-lg focus:bg-[#8e44ad] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#9b59b6] active:shadow-lg rounded-lg p-3 bg-[#2980b9] items-center gap-5"
                      >
                        <FaListAlt />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Activity Log
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/recommendedClass"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#e74c3c] hover:shadow-lg focus:bg-[#e74c3c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c0392b] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-3 text-base"
                      >
                        <FaHeart />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Recommend Class
                        </h3>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className="flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5"
                      >
                        <FaCog />{" "}
                        <h3
                          className={`${
                            open ? "text-base text-white font-mono" : "hidden"
                          }`}
                        >
                          Profile Settings
                        </h3>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center py-5 justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-500 focus:outline-none focus:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl text-center poppins-semibold font-bold">
              Dashboard
            </h2>
            <input
              className="mx-4 max-w-[10rem] border rounded-md px-4 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="p-4 bg-black">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
