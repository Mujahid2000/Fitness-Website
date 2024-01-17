import React, { useEffect, useState } from 'react';

const Success = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [success, setSuccess] = useState([]);

  const toggleShowMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    fetch('/Success.json')
      .then((res) => res.json())
      .then((data) => {
        setSuccess(data);
      });
  }, []);

  return (
    <div className="mt-5 ">
      <h2 className="text-2xl lg:text-5xl font-semibold text-center mb-5 font-mono uppercase">Our Success Story</h2>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1710px] mx-auto gap-5 px-5">
        {success.map((successStory, index) => (
          <div
            key={successStory.id}
            className="w-80 mx-auto bg-[#fafafa] shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300  mt-5"
          >
            <img className="h-40 md:h-56 lg:h-56 xl:h-56 w-full object-cover rounded-t-md" src={successStory.image} alt="" />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{successStory.name}</h2>
              <h4 className="text-base lg:text-xl font-semibold mb-2">{successStory.occupation}</h4>
              <p className="text-gray-700 text-justify">
                {expandedIndex === index
                  ? successStory.journey
                  : `${successStory.journey.slice(0, 15)}...`}
              </p>
              {successStory.journey.length > 15 && (
                <button
                  className="text-blue-500 hover:underline mt-2"
                  onClick={() => toggleShowMore({index})}
                >
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
