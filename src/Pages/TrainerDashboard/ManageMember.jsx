import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";




const ManageMember = () => {

  const {user} = useContext(AuthContext);
  const [dataList, setDataList] = useState([])
  const axiosPublic = UseAxiosPublic();

  
  
  useEffect(() => {
    if(user.displayName){
      axiosPublic.get(`/trainerBooked/${user?.displayName}`)
      .then(res => {
        
        setDataList(res.data)
      }).catch(err => {
        console.log(err)
        res.status()
      })
    }
    
  }, [user])

  return (
    <div className="container h-[89.5vh] mx-auto ">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Manage Members</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full  border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-4 text-center">Name</th>
              <th className="p-4 text-center">Image</th>
              <th className="p-4 text-center">Package</th>
            </tr>
          </thead>
           <tbody>
            {dataList && dataList.map((member) => (
              <tr key={member.id} className="">
                <td className="p-4 text-center pl text-white">{member.userName}</td>
                <td className="p-4">
                  <img src={member?.photo} alt={`Image for ${member.name}`} className="w-16 h-16 object-cover flex justify-center items-center" />
                </td>
                <td className="p-4 text-white text-center">{member.packageName}</td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  );
};

export default ManageMember;