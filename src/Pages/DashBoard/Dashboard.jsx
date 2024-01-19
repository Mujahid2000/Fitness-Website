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
import { IoIosArrowBack } from "react-icons/io";
import UseAdmin from '../../Hooks/UseAdmin';
import UseTrainer from '../../Hooks/UseTrainer';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Dashboard = () => {
  // todo: get isAdmin and isTrainer values from the database (replace true with your logic)
  const [open , setOpen] = useState(true);
  const [isAdmin] = UseAdmin();
  const [isTrainer] = UseTrainer();
  

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-blue-950 relative`}>
      <button onClick={() => setOpen(!open)} className={` absolute cursor-pointer -right-3 rounded-full top-9 w-7 border-2 border-white bg-white ${!open && 'rotate-180'}`}><IoIosArrowBack></IoIosArrowBack></button>
                
        <div className='flex justify-center items-center gap-2 mt-2'>
          <img className='w-10 h-10 rounded-lg' src='https://i.ibb.co/cYYK2CY/Screenshot-2023-11-24-003245.png' alt='' />
          <h2 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Fitness Website</h2>
        </div>
        <ul className='grid grid-cols-1 gap-3 p-4 text-white text-center mt-3'>
          <li>
            <NavLink to='/' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#008080] items-center gap-5'>
              <FaHome /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Home</h3>
            </NavLink>
          </li>
          {isAdmin ? (
            // Admin Dashboard
            <>
              <li>
                <NavLink to='/dashboard/allUsers' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-lime-600 items-center gap-5'>
                  <FaUsers /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>All Users</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allSubscriber' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5'>
                  <FaUsers /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>All Subscriber</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allTrainers' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#9b59b6] items-center gap-5'>
                  <FaUserTie /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>All Trainers</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/appliedTrainers' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#FFA500] items-center gap-5'>
                  <FaUserCheck /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Applied Trainer</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/balance' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-[#555555] items-center gap-5'>
                  <FaBalanceScale /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Balance</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/profile' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaCog /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Profile Settings</h3>
                </NavLink>
              </li>
            </>
          ) : isTrainer ? (
            // Trainer Dashboard
            <>
              <li>
                <NavLink to='/dashboard/manageSlots' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#3498db] hover:shadow-lg focus:bg-[#3498db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2980b9] active:shadow-lg rounded-lg p-3 bg-[#2c3e50] items-center gap-5'>
                  <FaRegCalendarAlt /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Manage Slots</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/manageMember' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#e74c3c] hover:shadow-lg focus:bg-[#e74c3c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c0392b] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaRegUser /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Manage Member</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addNewForum' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#27ae60] hover:shadow-lg focus:bg-[#27ae60] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2ecc71] active:shadow-lg rounded-lg p-3 bg-[#16a085] items-center gap-5'>
                  <FaPlusSquare /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Add New Forum</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addClass' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#f39c12] hover:shadow-lg focus:bg-[#f39c12] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d35400] active:shadow-lg rounded-lg p-3 bg-[#f1c40f] items-center gap-5'>
                  <FaPlusSquare /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}> Add New Class</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/profile' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaCog /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Profile Settings</h3>
                </NavLink>
              </li>
            </>
          ) : (
            // User Dashboard
            <>
              <li>
                <NavLink to='/dashboard/activityLog' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#8e44ad] hover:shadow-lg focus:bg-[#8e44ad] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#9b59b6] active:shadow-lg rounded-lg p-3 bg-[#2980b9] items-center gap-5'>
                  <FaListAlt /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Activity Log</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/recommendedClass' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#e74c3c] hover:shadow-lg focus:bg-[#e74c3c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c0392b] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaHeart /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Recommended Classes</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/profile' className='flex text-white leading-normal shadow-md transition duration-150 ease-in-out hover:bg-[#c0392b] hover:shadow-lg focus:bg-[#c0392b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e74c3c] active:shadow-lg rounded-lg p-3 bg-[#d35400] items-center gap-5'>
                  <FaCog /> <h3 className={`${open ? 'text-base text-white font-mono' : 'hidden'}`}>Profile Settings</h3>
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
