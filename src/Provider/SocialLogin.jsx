import { useContext } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";



const SocialLogin = () => {
    const { faceBookLogin, googleLogin } = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleLogin().then((result) => {
        console.log(result.user);
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo)
        .then((res) => {
            console.log(res.data);
        });
        navigate('/')
        });
    };


    const handleFacebookLogin = () =>{
        console.log('success');
    }

    return (
        <div>
        <div className="flex gap-10 justify-center mt-6">
            <button className="inline-block  bg-gray-900 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out active:scale-75 hover:transition-all hover:duration-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg">
            <BsFacebook onClick={handleFacebookLogin} className=" text-white rounded-full w-6 h-6"></BsFacebook>
            </button>
            <button className="inline-block  bg-gray-900 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out active:scale-75 hover:transition-all hover:duration-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg">
            <BsGoogle
                onClick={handleGoogleSignIn}
                className=" rounded-full text-white w-6 h-6"
            ></BsGoogle>
            </button>
            <button className="inline-block  bg-gray-900 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out active:scale-75 hover:transition-all hover:duration-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg">
            <BsGithub className=" text-white rounded-full w-6 h-6"></BsGithub>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;
