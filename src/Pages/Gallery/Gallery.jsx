import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoSearch } from "react-icons/io5";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [value, setValue] = useState("");
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [loading, setLoding] = useState(false)

  const containerStyle = {
    backgroundImage: 'url("https://images4.alphacoders.com/692/692043.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
  };


  
  useEffect(() => {
    axios
      .get("https://gym-server-orpin.vercel.app/gallery")
      .then((res) => {
        setGallery(res.data);
        setFilteredGallery(res.data);
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });
  }, []);

  useEffect(() => {
    setFilteredGallery(
      gallery.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value, gallery]);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Fitness || Gallery</title>
      </Helmet>

      {/* Search Header */}
      <div className="px-7 max-w-full bg-black mt-16 mx-auto">
        <div
          className="relative h-screen mt-3 flex items-center justify-center"
          style={containerStyle}
        >
          <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
          <div className="relative justify-center flex md:mr-0 z-10 text-white text-center">
            <div className="flex w-full mx-10 rounded bg-white">
              <input
                onChange={handleSearch}
                value={value}
                className="w-full border-none bg-transparent px-4 py-1 text-black outline-none focus:outline-none"
                type="search"
                name="search"
                placeholder="Search..."
              />
              <button
                type="button"
                className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
              >
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
        </div>

      {/* Gallery Section */}
      <div className="py-5 bg-black">
        <div className="max-w-7xl mx-auto">
          {filteredGallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((item) => (
                <div
                  key={item._id}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg">
              No items found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
