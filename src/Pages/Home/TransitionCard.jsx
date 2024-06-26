    import { useEffect, useState } from 'react';
    import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
    import { motion } from "framer-motion";
    const TransitionCard = () => {    
    const [team , setTeam] = useState([]);


    useEffect(() =>{
    fetch('/Team.json')
    .then((res) => res.json())
    .then((data) => setTeam(data))
    }, [])

return (
    <div className='max-w-[1800px] mx-auto'>
        <h2 className='text-2xl lg:text-5xl mt-9 mb-9 text-center font-sans font-bold'>Our <span className='text-sky-500'>Team </span> </h2>
        <hr />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5'>
    {
        team.map(teams => 
            <motion.div key={teams.id}
            className={`max-w-sm mx-auto overflow-hidden  relative hover:scale-105 transition-transform duration-300`}
            data-aos="zoom-in-up"
            whileHover={{ scale: 1.1 }}
            >
            <div className="bg-gray-200  p-4 transition duration-300 ease-in-out">
                <div className="relative overflow-hidden">
                <img src={teams.image} alt="Card" className="w-full h-auto" />
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 `}
                ></div>
                </div>
                <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className=" font-bold mb-2 text-white text-left text-lg">{teams.name}</h1>
                <p className="text-white text-left text-sm">{teams.title}</p>
                <p className="text-white mb-4 ">{teams.experience}</p>
                <div className="flex space-x-4">
                    <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                    <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
                    <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
                </div>
                </div>
            </div>
            <div className="bg-white p-4">
                
            </div>
            </motion.div>    
        )
    }
</div>
    </div>
  );
};

export default TransitionCard;
