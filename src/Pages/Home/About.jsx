import { Card } from 'flowbite-react';


const About = () => {
    return (
        <div className='   mt-5'>
          <h2 className='text-5xl font-bold font-mono text-center'>Why Choose Us</h2>
          <div className='max-w-2xl mx-auto px-5 mt-5'>
          <p className='text-base  text-center '>when picking a gym, consider its amenities like guest access, hours location, and extra benefits to enhance your experience</p>
          </div>
         <hr className='mt-8 bg-amber-700' />
          <div className='grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto gap-5 mt-6 px-5'>
  <Card className="max-w-sm bg-blue-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
      Best Training
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
      Unlock the pinnacle of fitness with our best-in-class training programs. Our expert trainers combine knowledge and passion, offering personalized guidance to help you surpass your goals. Embrace excellence in every workout at Gym.
    </p>
  </Card>
  <Card className="max-w-sm bg-green-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
      Experienced Trainers
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
      Elevate your fitness journey with our gym's modern equipment. Experience cutting-edge cardio machines, interactive displays, and precision weightlifting gear. Achieve your goals with innovation and style at Fitness Center.
    </p>
  </Card>
  <Card className="max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
      Modern Equipment
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
      Revolutionize your workouts with our modern gym equipment. From high-tech cardio machines to advanced strength training gear, experience fitness excellence at its best. Elevate your fitness journey with us!
    </p>
  </Card>
  <Card className="max-w-sm bg-yellow-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
      Awards Winners
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
      Join our award-winning fitness community, where excellence meets dedication. Celebrate your achievements with us as we inspire and recognize the commitment to a healthier, stronger, and happier you.
    </p>
  </Card>
</div>


            
         
        </div>
    );
};

export default About;