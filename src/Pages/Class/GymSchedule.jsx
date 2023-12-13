import { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GymSchedule = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    Axios.get('https://fitness-server-iota.vercel.app/weeklySchedule')
      .then((res) => setData(res.data))
      .catch((error) => console.error('Error fetching weekly schedule', error));
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); 
  };

  return (
    <div>
      <Helmet>
        <title>Fitness || Class</title>
      </Helmet>
      <div>
        <div>
          <h2 className="text-center text-2xl mb-4 mt-4">Class Page</h2>
        </div>
        <div>
          <form className="relative">
            <div className="flex">
             
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                onClick={toggleDropdown}
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                {selectedCategory || 'All categories'}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                id="dropdown"
                className={`absolute top-full left-0 z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                  
                  <button
                    type="button"
                    className={`inline-flex w-full px-4 py-2 ${
                      !selectedCategory ? 'bg-gray-200 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    }`}
                    onClick={() => selectCategory('')}
                  >
                    All Schedule
                  </button>
                
                {
                  data.map(item => 
                    <ul key={item._id} className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                      <button
                        type="button"
                        className={`inline-flex w-full px-4 py-2 ${selectedCategory === item.time ? 'bg-gray-200 dark:bg-gray-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        }`}
                        onClick={() => selectCategory(`${item.time}`)}
                      >
                        {item.time}
                      </button>
                    </li>
                  </ul>  
                  )
                }
              </div>
              
            </div>
          </form>
        </div>
      </div>
      <div className="overflow-x-auto bg-slate-400 p-4 mt-5">
        <table className="table-auto w-full border-collapse border border-gray-800 mt-6">
          <thead className="bg-slate-50 text-lg">
            <tr>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Saturday</th>
              <th className="p-2 border">Sunday</th>
              <th className="p-2 border">Monday</th>
              <th className="p-2 border">Tuesday</th>
              <th className="p-2 border">Wednesday</th>
              <th className="p-2 border">Thursday</th>
            </tr>
          </thead>
          <tbody>
  {data
    .filter(item => !selectedCategory || item.time === selectedCategory) // Filter data based on the selected day
    .map((item) => (
      <tr key={item._id}>
        <td className="p-2 border">{item.time}</td>
        <td className="p-2 border">
          <h1 className="font-bold text-center">{item.exercise}</h1>
        </td>
        <td className="p-2 border">
          <h1 className="font-bold text-center">{item.exercise2}</h1>
        </td>
        <td className="p-2 border">
          <h1 className="font-bold text-center">{item.exercise3}</h1>
        </td>
        <td className="p-2 border">
          <h1 className="font-bold text-center">{item.exercise4}</h1>
        </td>
        <td className="p-2 border">
          <h1 className="font-bold text-center">{item.exercise5}</h1>
        </td>
        <td className="p-2 border">
          <h1 className="font-bold text-center">{item.exercise}</h1>
        </td>
      </tr>
    ))}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default GymSchedule;
