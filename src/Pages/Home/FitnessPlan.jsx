

const FitnessPlan = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 lg:mb-0">
            <img src="https://i.ibb.co/kX7g3h3/Rectangle-1.png" alt="Fitness 1" className="rounded-lg h-full w-full" />
            <img src="https://i.ibb.co/P5z3mrh/Rectangle-2.png" alt="Fitness 2" className="rounded-lg w-full" />
            <img src="https://i.ibb.co/ZY8mchQ/Rectangle-4.png" alt="Fitness 3" className="rounded-lg w-full lg:col-span-2 md:col-span-1" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Transform your physique with our fitness plan.</h1>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Increase Muscle and Strength
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Be Healthier than before
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Increase Stamina
              </li>
            </ul>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join now
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900  py-8 rounded-lg mt-8 max-w-[100rem]">
        <div className="container  mx-auto px-4 flex justify-between items-center text-left">
          <p
          className="text-3xl max-w-4xl text-wrap"> Enhance user experience with healthy nutrition tips, support resources, and social elements.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlan;
