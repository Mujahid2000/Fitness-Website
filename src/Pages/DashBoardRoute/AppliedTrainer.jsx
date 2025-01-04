

import axios from 'axios';
import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

const AppliedTrainer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [apply, setApply] = useState([]);
    const [error, setError] = useState('');
    const axiosSecure = UseAxiosSecure();
   
    const {refetch, data: applyData =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/trainerApply')
            return res.data
        }
    })


    useEffect(() => {
        const fetchTrainerData = async () => {
            try {
                const response = await axiosSecure.get('/trainerapply');
                setApply(response.data);
            } catch (err) {
                console.error('Error fetching trainer data:', err);
                setError('Failed to fetch trainer data. Please try again.');
            }
        };

        fetchTrainerData();
    }, [axiosSecure]);
     




    const handleAccept = async (_id) => {
      const res = await axios.patch(`https://gym-server-orpin.vercel.apptrainerApply/${_id}`);
      console.log(res.data);
      Swal.fire({
        title: 'Success!',
        text: 'Trainer confirmation Successfully',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    }

  
    return (
        <div>
            <Helmet>
                <title>Dashboard || Applied Trainers</title>
            </Helmet>

            <div className={`${apply.length < 1 ? 'h-[89.5vh]  max-w-7xl mx-auto p-6' : 'h-full  max-w-7xl mx-auto p-6'}`}>
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
        </div>
      
    );
};

export default AppliedTrainer;