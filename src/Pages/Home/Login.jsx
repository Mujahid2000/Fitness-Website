import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SocialLogin from "../../Provider/SocialLogin";


const Login = () => {
    const { signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Good job!",
                text: "Successfully Login!",
                icon: "success"
            });
            navigate(from , {replace: true});
        })
    }

    


    return (
        <div className="max-w-full h-screen mx-auto bg-black flex justify-center items-center">
<div className="w-full max-w-sm p-4 bg-gray-950   rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:-gray-700">
    <form onSubmit={handleLogin} className="space-y-6 bg-gray-950" >
        <h5 className="text-xl text-center uppercase font-medium text-white dark:text-white">Sign in to our platform</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-black   text-sm rounded-lg focus:ring-blue-500 focus:-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:-black text-white 0 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-black text-white text-sm rounded-lg focus:ring-blue-500 focus:-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:-black  dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 rounded  text-black   " />
                </div>
                <label  className="ms-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
            </div>
            <a  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm text-center font-medium  text-white 0 dark:text-gray-300">
            Not registered? <a href="/signUp" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
    <div className="flex gap-4 justify-center mt-4">
    <SocialLogin></SocialLogin>
    </div>
    </div>
        </div>
    );
};

export default Login;