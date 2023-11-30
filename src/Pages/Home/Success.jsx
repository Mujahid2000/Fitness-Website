import { useEffect, useState } from 'react';

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
    <div className="mt-5">
      <h2 className="text-4xl font-semibold text-center mb-5">Our Success Story</h2>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {success.map((successStory, index) => (
          <div
            key={successStory.id}
            className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-4"
          >
            <img className="w-96 h-72 object-cover" src={successStory.image} alt="" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{successStory.name} </h2>
              <h4 className="text-xl font-semibold mb-2">{successStory.occupation} </h4>
              <p className="text-gray-700">
                {expandedIndex === index
                  ? successStory.journey
                  : `${successStory.journey.slice(0, 15)}...`}
              </p>
              {successStory.journey.length > 15 && (
                <button
                  className="text-blue-500 hover:underline mt-2"
                  onClick={() => toggleShowMore(index)}
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
