import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";




const ManageMember = () => {

  const {user} = useContext(AuthContext);
  const [dataList, setDataList] = useState([])
  const axiosSecure = UseAxiosSecure();
  
  useEffect(() => {
    if(user.displayName){
      axiosSecure.get(`/trainerBooked/${user.displayName}`)
      .then(res => {
        console.log(res)
        setDataList(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
    
  }, [user])

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
            {dataList.map((member) => (
              <tr key={member.id} className="hover:bg-blue-100">
                <td className="p-4">{member.user.displayName}</td>
                <td className="p-4">
                  <img src={member.user.photoURL} alt={`Image for ${member.name}`} className="w-16 h-16 object-cover" />
                </td>
                <td className="p-4">{member.packageName}</td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  );
};

export default ManageMember;