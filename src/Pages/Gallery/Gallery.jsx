import axios from "axios";
import { Spinner } from "keep-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";
"use client";
import { 

Card,
 } from "keep-react";
import {
  
  Heart,
 
} from "phosphor-react";
const LIMIT = 5;

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [activePage, setActivePage] = useState(12);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(false);
    const [filled, setFilled] = useState(false);

    const containerStyle = {
        backgroundImage: 'url("https://i.ibb.co/KVX5zNn/ezgif-com-webp-to-png.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
    };

    const fetchData = () => {
        if (loading) return;

        setLoading(true);

        axios
            .get('https://fitness-server-iota.vercel.app/gallery', {
                params: {
                    page: activePage,
                    size: LIMIT,
                },
            })
            .then(({ data }) => {
                setActivePage(activePage + 1);
                setGallery((prevGallery) => [...prevGallery, ...data]);
                setTotalData(data.length);
            })
            .catch((error) => {
                console.error('Error:', error.response);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    
    }, []);

    return (
        <div>
      <Helmet>
        <title>Fitness || Gallery</title>
      </Helmet>

      <div className="px-5 max-w-[1800px] mx-auto">
        <div className="relative h-screen mt-3 flex items-center justify-center" style={containerStyle}>
          <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl font-bold uppercase text-center">Fitness Center || Gallery</h1>
          </div>
        </div>
        <InfiniteScroll
          dataLength={gallery.length}
          next={fetchData}
          hasMore={gallery.length < totalData}
          loader={<Spinner className="justify-center items-center" color="info" aria-label="Info spinner example" />}
          endMessage={<p className="text-center text-2xl text-pink-500 font-bold mt-5"><b>You have loaded all data</b></p>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 max-w-[1700px] ml-3 lg:ml-20 mx-auto">
            {gallery.map((galleries, index) => (
              <Card
                key={galleries._id || index}
                className="max-w-xs overflow-hidden rounded-md hover:scale-105 transition-transform duration-300"
                imgSrc={galleries.image}
                imgSize="md"
              >
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ">
                  <button  onClick={() => setFilled(!filled)} className={filled ? 'bg-red-700 rounded-b-full rounded-t-3xl' : ''}><Heart size={20} weight="bold" color="white" /></button>
                </Card.Container>
                <Card.Container className="space-y-4 p-6">
                <Card.Title className="flex items-center justify-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
                    <span className="text-center">{galleries.title}</span>
                </Card.Title>
                </Card.Container>
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
        
    );
};

export default Gallery;
