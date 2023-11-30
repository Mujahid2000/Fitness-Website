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
        <div className='p-2 bg-metal-300'>
            <Navbar fluid rounded className=' bg-metal-300'>
      <Navbar.Brand href="https://i.ibb.co/cYYK2CY/Screenshot-2023-11-24-003245.png">
        <img src="https://i.ibb.co/cYYK2CY/Screenshot-2023-11-24-003245.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fitness Center</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
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
                    <button className="btn  btn-info bg-purple-600 text-white px-3 py-2 rounded-lg">Login</button>
                </Link>
                </div>
                )
            }

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/"  className='uppercase'>
          Home
        </Navbar.Link>
        <Navbar.Link href="/gallery" className='uppercase'>Gallery</Navbar.Link>
        <Navbar.Link href="/trainer" className='uppercase'>Trainer</Navbar.Link>
        <Navbar.Link href="/class" className='uppercase'>Classes</Navbar.Link>
        <Navbar.Link href="/community" className='uppercase'>Community</Navbar.Link>
        {
          user && isAdmin && !isTrainer && <Navbar.Link href="/dashboard" className='uppercase'>DashBoard</Navbar.Link>
        }
        {
          user && isTrainer && !isAdmin && <Navbar.Link href="/dashboard" className='uppercase'>DashBoard</Navbar.Link>
        }
        {
          user && isAdmin && isTrainer && <Navbar.Link href="/dashboard" className='uppercase'>DashBoard</Navbar.Link>
        }
        {
          user && !isAdmin && !isTrainer && <Navbar.Link href="/dashboard" className='uppercase'>DashBoard</Navbar.Link>
        }
        
        
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default NavBar;