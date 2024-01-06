'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import UseTrainer from '../Hooks/UseTrainer';
import UseAdmin from '../Hooks/UseAdmin';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isTrainer] = UseTrainer();
  const [isAdmin] = UseAdmin();
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  };

    return (
        <div className='p-2 bg-indigo-500 rounded-md'>
            <Navbar fluid rounded className=' bg-indigo-500'>
      <Navbar.Brand href="https://i.ibb.co/cYYK2CY/Screenshot-2023-11-24-003245.png">
        <img src="https://i.ibb.co/2Z06Phn/1048219-OL3-O6-X0-removebg-preview.png" className="mr-3 h-8 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Fitness Center</span>
      </Navbar.Brand>
      <div className="flex  md:order-2">
      {
                user?(
                    <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user?.photoURL} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Divider />
          {user?.email ? (
  <Dropdown.Item href="dashboard">DashBoard</Dropdown.Item>
) : (
  <p>No dashboard</p>
)}
          <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
        </Dropdown>
    
      </div>
                )
                :
                (
                    <div>
                <Link
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                        ? "text-[#333333] underline font-medium text-lg"
                        : ""
                    }
                >
                    <button className="btn  btn-info bg-white text-black hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-lg">Login</button>
                </Link>
                </div>
                )
            }

        <Navbar.Toggle />
      </div>
              <Navbar.Collapse >
          <Link to="/" className='uppercase text-white'>
            Home
          </Link>
          <Link to="/gallery" className='uppercase text-white'>
            Gallery
          </Link>
          <Link to="/trainer" className='uppercase text-white'>
            Trainer
          </Link>
          <Link to="/class" className='uppercase text-white'>
            Classes
          </Link>
          <Link to="/community" className='uppercase text-white'>
            Community
          </Link>
          <Link to="/contact" className='uppercase text-white'>
            Contact Us
          </Link>
          {
            user && isAdmin && !isTrainer &&
            <Link to="/dashboard" className='uppercase text-white'>
              DashBoard
            </Link>
          }
          {
            user && isTrainer && !isAdmin &&
            <Link to="/dashboard" className='uppercase text-white'>
              DashBoard
            </Link>
          }
          {
            user && isAdmin && isTrainer &&
            <Link to="/dashboard" className='uppercase text-white'>
              DashBoard
            </Link>
          }
          {
            user && !isAdmin && !isTrainer &&
            <Link to="/dashboard" className='uppercase text-white'>
              DashBoard
            </Link>
          }
        </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default NavBar;