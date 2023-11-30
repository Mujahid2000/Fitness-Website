// src/components/ProfileCard.js
import React, { useState } from 'react';

const Profile = () => {
  // Sample user data
  const initialUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Web Developer',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida orci.',
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update user data)
    console.log('Updated user data:', user);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="text-lg font-semibold mb-2">Account Details</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
        
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
