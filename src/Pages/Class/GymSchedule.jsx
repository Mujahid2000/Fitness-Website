import Axios from "axios";
import { useEffect, useState } from "react";

const GymSchedule = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5050/weeklySchedule')
      .then(res => setData(res.data))
      .catch(error => console.error('Error fetching weekly schedule', error));
  }, []);

  return (
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
          {data?.map((item) => (
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
  );
};

export default GymSchedule;
