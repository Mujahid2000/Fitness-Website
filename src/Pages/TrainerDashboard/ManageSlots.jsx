import React from 'react';

const ManageSlots = () => {
    

    return (
        <div>
            <h2>This is manageSlots </h2>
            <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">User Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Package Name</th>
          <th className="py-2 px-4 border-b">Selected Slot</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b">{user.userName}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">{user.packageName}</td>
            <td className="py-2 px-4 border-b">{user.selectedSlot}</td>
            <td className="py-2 px-4 border-b">{user.price}</td>
            <td className="py-2 px-4 border-b">
              <button className="bg-blue-500 text-white py-1 px-2 mr-2">Edit</button>
              <button className="bg-red-500 text-white py-1 px-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    );
};

export default ManageSlots;