import { IoPlayCircleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="pt-24 px-4 flex justify-around  max-h-[55rem] bg-[#000000] items-center ">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-5xl leading-tight lg:text-6xl text-white font-bold text-wrap lg:py-4">Helps for your ideal body fitness</h2>
        <p className=" text-base md:text-xl lg:text-2xl text-white lg:py-4">
          Motivate users with benefits and positive reinforcement, and offer
          modifications and progress tracking.
        </p>
        <div className="flex gap-6 py-6">
          <button className="text-base md:text-base px-3 py-1 lg:text-xl md:px-5 md:py-3 bg-[#097FD9] hover:bg-[#1b95fff7] text-white rounded-lg">
            Start Training
          </button>
          <button className="text-base md:text-base px-3 py-1 lg:text-lg md:px-5 md:py-3 bg-[#097FD9] hover:bg-[#1b95fff7] text-white rounded-lg flex  justify-center items-center">
            <IoPlayCircleOutline className="h-9 w-9" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex hidden lg:block  items-start bg-no-repeat  h-[650px] w-[560px] bg-[url('https://res.cloudinary.com/diez3alve/image/upload/v1736516573/kesbpavhcpj1ws3inetj.webp')]">
        
      </div>
    </div>
  );
};

export default Banner;
