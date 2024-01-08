

const Health = () => {
    return (
        <div className='mt-7 px-10'>
            <div className='mb-9'>
                <h2 className='text-center text-2xl lg:text-5xl   font-mono font-bold'>Our Services</h2>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 max-w-[104rem] mx-auto mt-10">
  <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-t from-gray-800 via-black to-transparent">
    <img
      src="https://i.ibb.co/mGfHLjC/i-Stock-1258586742.jpg"
      alt="Nutritional Guidance"
      className="object-cover w-full h-64 md:h-72 lg:h-96"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center">Nutritional Guidance</h2>
    </div>
  </div>
  <div className="relative rounded-xl hover:scale-105 transition-transform duration-300 overflow-hidden bg-gradient-to-t from-gray-800 via-black to-transparent">
    <img
      src="https://i.ibb.co/kBHcTqN/handsome-man-is-engaged-gym.jpg"
      alt="Trainer"
      className="object-cover w-full h-64 md:h-72 lg:h-96"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center">Trainer</h2>
    </div>
  </div>
  <div className="relative rounded-xl hover:scale-105 transition-transform duration-300 overflow-hidden bg-gradient-to-t from-gray-800 via-black to-transparent">
    <img
      src="https://i.ibb.co/QfQmqpY/sport-fitness-health-exercise-bikes-fitness-center.jpg"
      alt="Modern Equipment"
      className="object-cover w-full h-64 md:h-72 lg:h-96"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center">Modern Equipment</h2>
    </div>
  </div>
  <div className="relative rounded-xl hover:scale-105 transition-transform duration-300 overflow-hidden bg-gradient-to-t from-gray-800 via-black to-transparent">
    <img
      src="https://i.ibb.co/ysV64qg/group-young-people-training-gym-indoors-maintaining-sportive-lifestyle.jpg"
      alt="Group Fitness Classes"
      className="object-cover w-full h-64 md:h-72 lg:h-96"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center">Group Fitness Classes</h2>
    </div>
  </div>
</div>


        </div>
    );
};

export default Health;