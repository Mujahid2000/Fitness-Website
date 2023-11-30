'use client';

import axios from 'axios';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AppliedTrainer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [apply, setApply] = useState([]);
    const axiosSecure = UseAxiosSecure();
   
    const {refetch, data: applyData =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/trainerApply')
            return res.data
        }
    })
  
    
      axios.get("http://localhost:5050/trainerApply")
        .then((res) => res.data)
        .then((data) => {
            setApply(data)
            refetch()
        })
        .catch((error) => console.error("Error fetching data:", error));

    const handleAccept = async (_id) => {
      const res = await axios.patch(`http://localhost:5050/trainerApply/${_id}`);
      console.log(res.data);
      Swal.fire({
        title: 'Success!',
        text: 'Trainer confirmation Successfully',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    }

  
    return (
      <div className='bg-[#FFA500] h-full'>
        <div className="flex flex-col px-4">
                <div className="-my-2 mt-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {apply.map((applyData) => (
                    <tr key={applyData._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{applyData.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{applyData.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{applyData.age}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <button
                        
                        className="text-red-600 hover:text-red-900 focus:outline-none"
                        >
                <Button onClick={() => setOpenModal(true)}>Update Role</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Body>
                    <div className="space-y-6">
                        <img className="w-72 h-56" src={applyData.image} alt="" />
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {applyData.about}
                        </p>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={() => handleAccept(applyData._id) / setOpenModal(false)}>accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                    </Modal.Footer>
                </Modal>
                </button>
            </td>
            </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
};

export default AppliedTrainer;