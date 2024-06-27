import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { IoSearch } from "react-icons/io5";
import LazyLoad from "react-lazy-load";



const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [value, setValue] = useState("");
  const [filteredGallery, setFilteredGallery] = useState([]);
console.log(filteredGallery);
  const containerStyle = {
    backgroundImage: 'url("https://images4.alphacoders.com/692/692043.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
  };

   useEffect(() =>{
    axios
    .get("https://fitness-server-seven.vercel.app/gallery")
   .then((res) => {setGallery(res.data) ; setFilteredGallery(res.data)})
    .catch((error) => {
      console.error("Error:", error.response);
    })
   },[])
    
  
useEffect(()=>{
setFilteredGallery(gallery.filter((item) =>(
  item.title.toLowerCase().includes(value.toLowerCase())
)))
},[value, gallery])
 


 const handleSearch = (e) => {
 setValue(e.target.value.toLowerCase());
};

  return (
    <div>
      <Helmet>
        <title>Fitness || Gallery</title>
      </Helmet>

      <div className="px-9 max-w-full bg-black mt-16 mx-auto">
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
        <div className="columns-1 md:columns-2 xl:columns-3 gap-75 mt-8 max-w-full mx-auto justify-self-center place-items-center">
        {filteredGallery.map((galleries) => (
            <div key={galleries._id} className="break-inside-avoid mb-8">
              <LazyLoad offset={100} placeholder={<div style={{height: '200px', backgroundColor: '#ccc'}} />}>
                <img
                  className="h-auto hover:scale-110 hover:duration-500 cursor-pointer max-w-full rounded-lg"
                  src={galleries.image}
                  srcSet={`${galleries.image}?w=200 200w, ${galleries.image}?w=400 400w, ${galleries.image}?w=800 800w`}
                  sizes="(max-width: 600px) 480px, 800px"
                  alt={galleries.title}
                />
              </LazyLoad>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Gallery;
