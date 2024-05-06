

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
      <div className='fixed top-0 w-full z-50  py-2.8 '>
      <Navbar fluid rounded className='bg-white py-2.5 shadow-md'>
        <Navbar.Brand href="/">
          <img src="https://i.ibb.co/NjvfR0R/Screenshot-2024-01-08-135124-removebg-preview.png" className="mr-3 h-8 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Fitness Center</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={user?.photoURL}  rounded />}
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
          ) : (
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
                <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">Login</button>
              </Link>
            </div>
          )}
          <Navbar.Toggle />
        </div>
              <Navbar.Collapse className="ml-auto mr-4">
          <Link to="/" className='uppercase text-black hover:text-orange-500'>
            Home
          </Link>
          <Link to="/gallery" className='uppercase text-black hover:text-orange-500'>
            Gallery
          </Link>
          <Link to="/trainer" className='uppercase text-black hover:text-orange-500'>
            Trainer
          </Link>
          <Link to="/class" className='uppercase text-black hover:text-orange-500'>
            Classes
          </Link>
          <Link to="/community" className='uppercase text-black hover:text-orange-500'>
            Community
          </Link>
          <Link to="/contact" className='uppercase text-black hover:text-orange-500'>
            Contact Us
          </Link>
          {
            user && isAdmin && !isTrainer &&
            <Link to="/dashboard" className='uppercase text-black hover:text-orange-500'>
              DashBoard
            </Link>
          }
          {
            user && isTrainer && !isAdmin &&
            <Link to="/dashboard" className='uppercase text-black hover:text-orange-500'>
              DashBoard
            </Link>
          }
          {
            user && isAdmin && isTrainer &&
            <Link to="/dashboard" className='uppercase text-black hover:text-orange-500'>
              DashBoard
            </Link>
          }
          {
            user && !isAdmin && !isTrainer &&
            <Link to="/dashboard" className='uppercase text-black hover:text-orange-500'>
              DashBoard
            </Link>
          }
        </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default NavBar;