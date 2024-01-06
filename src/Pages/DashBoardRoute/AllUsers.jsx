import { useQuery } from '@tanstack/react-query';
import { FaUserCheck } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Helmet } from 'react-helmet';

const AllUsers = () => {

    const axiosSecure = UseAxiosSecure();
   
    const {refetch, data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })


    const handleUpdateRole = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            refetch()
        })
    }

    return (
        <div >
            <Helmet>
                <title>Dashboard || ALL Users</title>
            </Helmet>
            <div className='bg-lime-600 h-screen p-6'>
        <div className="flex justify-evenly my-4 ">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
        </div>
        <div className="container mx-auto my-10 ml-2">
    <table className="min-w-full bg-white border border-gray-300">
    <thead className="bg-slate-400">
    <tr>
        
        <th className="py-2 px-4 border-b text-center">Name</th>
        <th className="py-2 px-4 border-b text-center">Email</th>
        <th className="py-2 px-4 border-b text-center">Role</th>
        
    </tr>
    </thead>
    <tbody>
    {
        users.map((user, index) => 
            <tr key={user._id} className={index % 2 === 0 ? 'bg-blue-200' : 'bg-white'}>
            
            <td className="py-2 px-4 border-b border-x text-center"> {user.name}</td>
            <td className="py-2 px-4 border-b border-x text-center">{user.email}</td>
            <td className="py-2 px-4 border-b border-x text-center">
            {
                user.role === 'admin' ? "Admin" :
                <button onClick={() =>handleUpdateRole(user)}><FaUserCheck className="w-5 h-6 mx-auto justify-center" /></button>
            }

            </td>
            
            </tr>
                )
        }
        </tbody>
    </table>
</div>

        </div>
        </div>
    );
};

export default AllUsers;