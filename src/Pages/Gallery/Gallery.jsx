import axios from "axios";
import { Spinner } from "keep-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoSearch } from "react-icons/io5";

const LIMIT = 5;

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const containerStyle = {
    backgroundImage: 'url("https://images4.alphacoders.com/692/692043.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
  };

  const fetchData = () => {
    if (loading) return;

    setLoading(true);

    axios
      .get("https://fitness-server-iota.vercel.app/gallery", {
        params: {
          page: activePage,
          size: LIMIT,
        },
      })
      .then(({ data }) => {
        setActivePage(activePage + 1);
        setGallery((prevGallery) => {
          const newData = data.filter(
            (item) =>
              !prevGallery.some((existingItem) => existingItem._id === item._id)
          );
          const updatedGallery = [...prevGallery, ...newData];
          setFilteredUsers(updatedGallery); // Initialize filteredUsers with all data
          return updatedGallery;
        });
        setTotalData(data.totalCount); // Assuming the total count is returned in data.totalCount
      })
      .catch((error) => {
        console.error("Error:", error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (value === "") {
      setFilteredUsers(gallery);
    } else {
      const filteredItems = gallery.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filteredItems);
    }
  }, [value, gallery]);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Fitness || Gallery</title>
      </Helmet>

      <div className="px-5 max-w-full bg-black mt-16 mx-auto">
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
        <InfiniteScroll
          dataLength={filteredUsers.length}
          next={fetchData}
          hasMore={gallery.length < totalData}
          loader={
            <Spinner
              className="justify-center items-center"
              color="info"
              aria-label="Info spinner example"
            />
          }
          endMessage={
            <p className="text-center text-2xl text-white font-bold mt-5">
              <b>You have loaded all data</b>
            </p>
          }
        >
          <div className="columns-1 md:columns-2 xl:columns-3 gap-75 mt-8 max-w-full mx-auto justify-self-center place-items-center">
            {filteredUsers.map((galleries) => (
              <div key={galleries._id} className=" break-inside-avoid mb-8">
                <img
                  className="h-auto hover:scale-110 hover:transition-all hover:duration-500	cursor-pointer max-w-full rounded-lg"
                  src={galleries.image}
                  alt="Gallery image"
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Gallery;
