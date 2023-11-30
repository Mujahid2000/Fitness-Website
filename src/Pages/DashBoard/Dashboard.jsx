import { NavLink, Outlet } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaUserCheck,
  FaBalanceScale,
  FaHeart,
  FaRegCalendarAlt,
  FaRegUser,
  FaPlusSquare,
  FaListAlt,
  FaCog,
} from 'react-icons/fa';
import UseAdmin from '../../Hooks/UseAdmin';
import UseTrainer from '../../Hooks/UseTrainer';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  // todo: get isAdmin and isTrainer values from the database (replace true with your logic)
  const [isAdmin] = UseAdmin();
  const [isTrainer] = UseTrainer();
  

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
<div className='flex'>
      <div className='w-64 min-h-screen bg-indigo-500 text-center'>
        <div className='flex justify-center items-center gap-2 mt-2'>
          <img className='w-10 h-10 rounded-lg' src='https://i.ibb.co/cYYK2CY/Screenshot-2023-11-24-003245.png' alt='' />
          <h2 className='text-xl text-white'>Fitness Website</h2>
        </div>
        <ul className='grid grid-cols-1 gap-3 p-4 text-white text-center mt-3'>
          <li>
            <NavLink to='/' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#008080] items-center gap-5'>
              <FaHome /> Home
            </NavLink>
          </li>
          {isAdmin ? (
            // Admin Dashboard
            <>
              <li>
                <NavLink to='/dashboard/allUsers' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-lime-600 items-center gap-5'>
                  <FaUsers /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allSubscriber' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5'>
                  <FaUsers /> All Subscriber
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allTrainers' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#9b59b6] items-center gap-5'>
                  <FaUserTie /> All Trainers
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/appliedTrainers' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#FFA500] items-center gap-5'>
                  <FaUserCheck /> Applied Trainer
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/balance' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#555555] items-center gap-5'>
                  <FaBalanceScale /> Balance
                </NavLink>
              </li>
            </>
          ) : isTrainer ? (
            // Trainer Dashboard
            <>
              <li>
                <NavLink to='/dashboard/manageSlots' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#3498db] hover:shadow-lg focus:bg-[#3498db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2980b9] active:shadow-lg rounded-lg p-3 bg-[#2c3e50] items-center gap-5'>
                  <FaRegCalendarAlt /> Manage Slots
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/manageMember' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#e74c3c] hover:shadow-lg focus:bg-[#e74c3c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c0392b] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaRegUser /> Manage Member
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addNewForum' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#27ae60] hover:shadow-lg focus:bg-[#27ae60] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2ecc71] active:shadow-lg rounded-lg p-3 bg-[#16a085] items-center gap-5'>
                  <FaPlusSquare /> Add New Forum
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addClass' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#f39c12] hover:shadow-lg focus:bg-[#f39c12] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d35400] active:shadow-lg rounded-lg p-3 bg-[#f1c40f] items-center gap-5'>
                  <FaPlusSquare /> Add New Class
                </NavLink>
              </li>
            </>
          ) : (
            // User Dashboard
            <>
              <li>
                <NavLink to='/dashboard/activityLog' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#8e44ad] hover:shadow-lg focus:bg-[#8e44ad] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#9b59b6] active:shadow-lg rounded-lg p-3 bg-[#2980b9] items-center gap-5'>
                  <FaListAlt /> Activity Log
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/recommendedClasses' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#e74c3c] hover:shadow-lg focus:bg-[#e74c3c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c0392b] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaHeart /> Recommended Classes
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/profile' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaCog /> Profile Settings
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
