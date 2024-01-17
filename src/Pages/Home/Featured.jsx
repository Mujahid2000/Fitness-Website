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
      <h2 className="text-2xl lg:text-5xl font-semibold uppercase mb-9 mt-6 text-center font-mono">Featured section</h2>
      <hr />
      <div className="flex justify-center items-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {feature.map((featured) => (
            <div key={featured.id} className={` hover:scale-105 transition-transform duration-300 rounded-lg shadow bg-blue-300 dark:bg-gray-800 dark:border-gray-700`}>
              <a href="#">
                <img className="rounded-t-lg object-cover h-40 md:h-56 lg:h-56 xl:h-56 w-full" src={featured.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-base sm:text-lg lg:text-xl xl:text-lg font-bold tracking-tight text-gray-900 dark:text-white">{featured.title}</h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{featured.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
