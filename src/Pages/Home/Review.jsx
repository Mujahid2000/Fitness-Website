

const Review = () => {


  return (
    <section className="bg-black">
      <div className="mx-auto flex justify-around flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className=''>
          <div className="max-w-7xl items-end justify-between">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              What Our Member Say About Us?
            </h2>
            <div className="pt-8 gap-4 lg:mt-24">
              <div className="flex items-center -space-x-4">
                <img
                  alt="user 1"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <img
                  alt="user 2"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                  className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <img
                  alt="user 3"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
                  className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
              </div>
              <div className="text-sm text-white py-4">
                10K+ Satisfied Customer
              </div>
            </div>
          </div>
        </div>

        <div className="">
        <div className=" p-3 relative">
         <div className="w-[24rem] mx-auto" >
         <div className="">
      <div id="keen-slider" className="keen-slider">
        <div className="keen-slider__slide">
          <div className="flex max-w-xl mx-auto h-full flex-col justify-between bg-[#070505] p-6 shadow-sm sm:p-8 lg:p-12">
            <div>
              <div className="flex gap-0.5 text-green-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 flex">
                <div>
                  <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Mujahidul Islam</p>
                  <p className="mt-4 leading-relaxed text-white">
                    No, Rose, they are not breathing. And they have no arms or legs … Where are
                    they? You know what? If we come across somebody with no arms or legs, do we
                    bother resuscitating them? I mean, what quality of life do we have there?
                  </p>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
              &mdash; Michael Scott
            </footer>
          </div>
        </div>
        {/* Add more slides here */}
      </div>
    </div>
            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />
              
               <div
                  className="w-[24rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                 <div className="">
      <div id="keen-slider" className="keen-slider">
        <div className="keen-slider__slide">
          <div className="flex max-w-xl mx-auto h-full flex-col justify-between bg-[#070505] p-6 shadow-sm sm:p-8 lg:p-12">
            <div>
              <div className="flex gap-0.5 text-green-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 flex">
                <div>
                  <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Rajon Rahman</p>
                  <p className="mt-4 leading-relaxed text-white">
                    No, Rose, they are not breathing. And they have no arms or legs … Where are
                    they? You know what? If we come across somebody with no arms or legs, do we
                    bother resuscitating them? I mean, what quality of life do we have there?
                  </p>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
              &mdash; Michael Scott
            </footer>
          </div>
        </div>
        {/* Add more slides here */}
      </div>
    </div>
                 
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label htmlFor="carousel-3" className="inline-block text-white cursor-pointer -translate-x-5  rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                        </svg>
                     </label>
                     <label htmlFor="carousel-2" className="inline-block text-white cursor-pointer translate-x-5  rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
            
            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />
                        <div
                  className="w-[24rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <div className="">
      <div id="keen-slider" className="keen-slider">
        <div className="keen-slider__slide">
          <div className="flex max-w-xl mx-auto h-full flex-col justify-between bg-[#070505] p-6 shadow-sm sm:p-8 lg:p-12">
            <div>
              <div className="flex gap-0.5 text-green-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 flex">
                <div>
                  <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Nazrul Islam</p>
                  <p className="mt-4 leading-relaxed text-white">
                    No, Rose, they are not breathing. And they have no arms or legs … Where are
                    they? You know what? If we come across somebody with no arms or legs, do we
                    bother resuscitating them? I mean, what quality of life do we have there?
                  </p>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
              &mdash; Michael Scott
            </footer>
          </div>
        </div>
        {/* Add more slides here */}
      </div>
    </div>
                 
               </div>
            </div>
           
            
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" checked />
             
               <div
                  className="w-[24rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                
                <div className="">
      <div id="keen-slider" className="keen-slider">
        <div className="keen-slider__slide">
          <div className="flex max-w-xl mx-auto h-full flex-col justify-between bg-[#070505] p-6 shadow-sm sm:p-8 lg:p-12">
            <div>
              <div className="flex gap-0.5 text-green-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 flex">
                <div>
                  <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Abdul Aziz</p>
                  <p className="mt-4 leading-relaxed text-white">
                    No, Rose, they are not breathing. And they have no arms or legs … Where are
                    they? You know what? If we come across somebody with no arms or legs, do we
                    bother resuscitating them? I mean, what quality of life do we have there?
                  </p>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
              &mdash; Michael Scott
            </footer>
          </div>
        </div>
        {/* Add more slides here */}
      </div>
    </div>
                 
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label htmlFor="carousel-2" className="inline-block text-white cursor-pointer -translate-x-5 rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                        </svg>
                     </label>
                     <label htmlFor="carousel-1" className="inline-block text-white cursor-pointer translate-x-5  rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
           
         </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
