import  { useState } from 'react';
import Swal from 'sweetalert2';

const AddForum = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
     
      Swal.fire({
        title: 'Success!',
        text: 'Forum post added successfully!',
        icon: 'success',
      });
    
      setTitle('');
      setDescription('');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="max-w-full h-[89.5vh] mx-auto  flex justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Forum Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter the title"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter the description"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForum;
