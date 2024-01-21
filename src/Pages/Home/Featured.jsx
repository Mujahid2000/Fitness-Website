import { useEffect, useState } from "react";

const Featured = () => {
  const [feature, setFeature] = useState([]);
  console.log(feature.image);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
        {feature.map((featured) => (
  <div key={featured.id}  className="w-72 mx-auto mt-10 bg-[#fafafa] shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 ">
  <div className="flex justify-center items-center h-48 bg-gray-200">
    <img className="w-full h-full" src={featured.image} alt="" />
  </div>
  <div className="p-6">
    <h4 className="text-lg font-semibold mb-2">
      <a  className="hover:text-yellow-500 transition duration-300">{featured.title}</a>
    </h4>
    <p className="text-sm text-gray-600 mb-4">{featured.description}</p>
    <div className="flex justify-between items-center">
      
      <div className="flex">
        <a  className="text-gray-700 hover:text-yellow-500 transition duration-300">
          <i className="fa fa-heart"></i>
        </a>
        <a  className="text-gray-700 hover:text-yellow-500 transition duration-300 ml-3">
          <i className="fa fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  </div>
</div>
))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
