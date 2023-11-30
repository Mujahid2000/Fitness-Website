import axios from "axios";
import { useEffect, useState } from "react";

const AllSubscriber = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/subscribe')
            .then(res => res.data)
            .then(data => setSubscribers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='bg-purple-700 h-screen p-6'>
            <h2 className='text-5xl text-center mb-6 mt-6 text-white font-serif font-semibold'>All Subscribers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 transition-all`}>
                                <td className="py-3 px-4 border-b text-center">{subscriber.name}</td>
                                <td className="py-3 px-4 border-b text-center">{subscriber.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubscriber;
