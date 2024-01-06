import { useContext, useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import {  useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Provider/SocialLogin";
import { Button } from "keep-react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

    const { createUser, user, handleUpdateProfile, setLoading } = useContext(AuthContext);
    console.log(user);
    const axiosPublic = UseAxiosPublic();
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/')
        }
    }, [user])

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name')
        const photoURL = form.get('photoURL')
        
        console.log(email, password, name, photoURL);

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
            setPasswordError("Password must contain at least one special character.");
            return;
        }
        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, photoURL)
                .then(() => {
                    // create user in database
                    const userInfo = {
                        name: name,
                        email: email,
                    }
                    axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId){
                            console.log('user added to the data base');
                            Swal.fire(
                                'Registration Successful!',
                                'You have successfully registered.',
                                'success'
                            );
                        setLoading(false)
                        }
                    })
                    
                })
                
            })
            .catch(error => {
                setLoading(false)
                console.error(error.code);
                if (error.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already in use!',
                    });
                }
            });
    };


    return (
        <div>
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl uppercase text-center font-bold text-indigo-600 mb-4">Sign Up</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full py-2 px-3 border bg-gray-100 rounded-md focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your name"
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-2 px-3 border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your email"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full py-2 px-3 border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your password"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="photoURL"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Photo URL
                </label>
                <div className="relative rounded-md shadow-sm">
                    <input
                    type="text"
                    id="photoURL"
                    name="photoURL"
                    className="w-full py-2 px-3 border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your photo URL"
                    />
                    <div className="absolute top-2 right-2 text-indigo-600">
                    <FaCamera />
                    </div>
                </div>
                </div>
                <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-200 focus:outline-none "
                >
                Sign Up
                </button>
            </form>
                <div className="flex gap-4 justify-center mt-4">
            <SocialLogin></SocialLogin>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <a href="/login" className="text-indigo-600 underline">
                Log in
                </a>
            </p>
            </div>
        </div>
        </div>
);
};

export default SignUp;
