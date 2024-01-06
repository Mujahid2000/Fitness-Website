import { useEffect, useState } from "react";

const Featured = () => {
    const [feature, setFeature] = useState([]);

    useEffect(() => {
        fetch(`/Feature.json`)
            .then((res) => res.json())
            .then((data) => setFeature(data));
    }, []);

    return (
        <div className="px-5 max-w-[1870px] mx-auto">
            <h2 className="text-5xl font-semibold uppercase mb-9 mt-6 text-center font-mono">Featured section</h2>
            <hr />
            <div className="flex justify-center items-center mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
  {feature.map((featured, index) => (
    <div key={featured.id} className={`max-w-sm hover:scale-105 transition-transform duration-300 rounded-lg shadow ${index % 2 === 0 ? 'bg-blue-300' : 'bg-green-300'} dark:bg-gray-800 dark:border-gray-700`}>
      <a href="#">
        <img className="rounded-t-lg h-64 w-full" src={featured.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{featured.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{featured.description}</p>
      </div>
    </div>
  ))}
</div>



            </div>
        </div>
    );
};

export default Featured;
