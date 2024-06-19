import { AiOutlineLogout } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import UseTrainer from '../Hooks/UseTrainer';
import UseAdmin from '../Hooks/UseAdmin';
import { IoMdMenu } from "react-icons/io";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isTrainer] = UseTrainer();
  const [menu, setMenu] = useState(false);
  const [isAdmin] = UseAdmin();
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  return (
    <div className='fixed top-0 w-full z-50'>
      <div className='flex items-center justify-between  py-5 px-2 gap-4 bg-black shadow-md'>
        <div className='flex gap-2 items-center'>
          <Link to={'/'}>
          <img src="https://i.ibb.co/pPQVxSw/Screenshot-2024-06-16-214828-removebg-preview.png" className=" h-6 sm:h-6" alt="Logo" />
          </Link>
          <h2 className="text-xs lg:text-lg poppins-semibold font-semibold text-white">Gym Center</h2>
        </div>
        <div className="flex items-center justify-center flex-row-reverse md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white focus:outline-none">
          <IoMdMenu className='w-6 h-6' />

          </button>

          {user ? (
            <div className="relative  mx-2 ">
              <img
                onClick={() => setMenu(!menu)}
                src={user?.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {menu && (
                <ul className="absolute z-10 right-0 mt-4 w-48 bg-black border border-gray-200 rounded-md shadow-lg">
                  <Link to={'/dashboard/dashboard'}>
                    <li className="flex items-center gap-2 p-2 text-white cursor-pointer">
                      <CgProfile className="w-4 h-4" />
                      <span>Dashboard</span>
                    </li>
                  </Link>
                  <li
                    onClick={handleLogOut}
                    className="flex items-center gap-2 p-2   cursor-pointer"
                  >
                    <AiOutlineLogout className="w-4 text-white h-4" />
                    <span className='text-white'>Sign Out</span>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to={'/login'} className="mt-3 md:mt-0">
              <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
                LOG IN
              </button>
            </Link>
          )}
        </div>
        <div className={`flex-col md:flex md:flex-row md:items-center hidden`}>
          <ul className='flex text-sm  poppins-semibold lg:text-base flex-col md:flex-row gap-3 '>
            <li>
              <Link to="/" className='uppercase text-white hover:text-sky-500'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className='uppercase text-white hover:text-sky-500'>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/trainer" className='uppercase text-white hover:text-sky-500'>
                Trainer
              </Link>
            </li>
            <li>
              <Link to="/class" className='uppercase text-white hover:text-sky-500'>
                Classes
              </Link>
            </li>
            <li>
              <Link to="/community" className='uppercase text-white hover:text-sky-500'>
                Community
              </Link>
            </li>
            <li>
              <Link to="/contact" className='uppercase text-white hover:text-sky-500'>
                Contact
              </Link>
            </li>
            {
            user && isAdmin && !isTrainer &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          {
            user && isTrainer && !isAdmin &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          {
            user && isAdmin && isTrainer &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          {
            user && !isAdmin && !isTrainer &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          </ul>
          {user ? (
            <div className="relative mt-3 md:mt-0 ml-4 ">
              <img
                onClick={() => setMenu(!menu)}
                src={user?.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {menu && (
                <ul className="absolute z-10 right-0 mt-4 w-40 bg-black border border-gray-200 rounded-md shadow-lg">
                  <Link to={'/dashboard/dashboard'}>
                    <li className="flex items-center gap-2 p-2 text-white cursor-pointer">
                      <CgProfile className="w-4 h-4" />
                      <span className='text-white'>Dashboard</span>
                    </li>
                  </Link>
                  <li
                    onClick={handleLogOut}
                    className="flex items-center gap-2 p-2 bg-black cursor-pointer"
                  >
                    <AiOutlineLogout className="w-4 text-white h-4" />
                    <span className='text-white'>Sign Out</span>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to={'/login'} className="mt-3 mx-2 md:mt-0">
              <button className="bg-blue-500 text-white font-medium py-2 px-4 text-sm rounded hover:bg-blue-600">
                LOG IN
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* mobile side */}
      <div className={`md:hidden ${mobileMenu ? 'block' : 'hidden'} px-5 py-4 bg-black`}>
        <ul className='flex flex-col poppins-semibold gap-4 text-sm'>
          <li>
            <Link to="/" className='uppercase text-white hover:text-sky-500'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className='uppercase text-white hover:text-sky-500'>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/trainer" className='uppercase text-white hover:text-sky-500'>
              Trainer
            </Link>
          </li>
          <li>
            <Link to="/class" className='uppercase text-white hover:text-sky-500'>
              Classes
            </Link>
          </li>
          <li>
            <Link to="/community" className='uppercase text-white hover:text-sky-500'>
              Community
            </Link>
          </li>
          <li>
            <Link to="/contact" className='uppercase text-white hover:text-sky-500'>
              Contact
            </Link>
          </li>
          {
            user && isAdmin && !isTrainer &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          {
            user && isTrainer && !isAdmin &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          {
            user && isAdmin && isTrainer &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
          {
            user && !isAdmin && !isTrainer &&
            <Link to="/dashboard/dashboard" className='uppercase text-white hover:text-sky-500'>
              DashBoard
            </Link>
          }
        </ul>
        
      </div>
    </div>
  );
};

export default NavBar;
