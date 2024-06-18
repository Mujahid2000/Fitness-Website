import axios from 'axios';
import  { useContext, useState } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const Profile = () => {
  const {setLoading, user, handleUpdateProfile } = useContext(AuthContext);
  const axiosPublic = UseAxiosSecure();
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUpdateProfile(formData.name, user.photoURL)
      .then(async () => {
        try {
          axiosPublic.patch(`/users/update/${user.email}`, {
            name: formData.name,

          })
            .then(res => {
              setLoading(false)
              console.log(res)
            }).catch(err => {
              setLoading(false)
              console.log(err)
            })

        } catch (error) {
          setLoading(false)
          console.error('Error updating user data:', error);
        }
      }).catch((error) => {
        setLoading(false)
        console.error('Error updating user profile:', error);
      })

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
   <div className='h-[89.5vh]'>
     <div className="max-w-7xl  mx-auto bg-white p-6 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className=''>
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
              value={formData.name}
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
              disabled
              readOnly={true}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
   </div>
  );
};

export default Profile;