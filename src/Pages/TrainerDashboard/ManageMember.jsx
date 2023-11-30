

const ManageMember = () => {
  const members = [
    { id: 1, name: 'John Doe', image: 'image1.jpg', package: 'Admin' },
    { id: 2, name: 'Jane Smith', image: 'image2.jpg', package: 'Member' },
    { id: 3, name: 'Bob Johnson', image: 'image3.jpg', package: 'Member' },
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Manage Members</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Package</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-blue-100">
                <td className="p-4">{member.name}</td>
                <td className="p-4">
                  <img src={member.image} alt={`Image for ${member.name}`} className="w-16 h-16 object-cover" />
                </td>
                <td className="p-4">{member.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMember;
