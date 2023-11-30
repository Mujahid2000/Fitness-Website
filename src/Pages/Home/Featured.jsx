
import { useEffect, useState } from "react";

const Featured = () => {
    const [feature, setFeature] = useState([]);

    useEffect(() => {
        fetch(`/Feature.json`)
        .then((res) => res.json())
        .then((data) => setFeature(data));
    }, []);

    return (
        <div className="max-w-[1890px] mx-auto ml-9">
            <h2 className="text-4xl font-semibold uppercase mb-9 mt-6 text-center font-mono">Featured section</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 mt-5 ">
                {
                    feature.map((featured) =>
                    
                    <div key={featured.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

                    )
                }
            </div>
        </div>
    );
};

export default Featured;
