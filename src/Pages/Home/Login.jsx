import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SocialLogin from "../../Provider/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [trainer, setTrainer] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (trainer) {
            setEmail('hello@gmail.com');
            setPassword('Rwto9755#');
        } else if (admin) {
            setEmail('ammu2@gmail.com');
            setPassword('Rwto9755#');
        } else {
            setEmail('');
            setPassword('');
        }
    }, [trainer, admin]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Good job!",
                text: "Successfully Login!",
                icon: "success"
            });
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error"
            });
        }
    };

    return (
        <div className="max-w-full h-screen mx-auto bg-black flex justify-center items-center">
            <div className="w-full max-w-lg p-4 bg-gray-950 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:-gray-700">
                <form onSubmit={handleLogin} className="space-y-6 bg-gray-950">
                    <h5 className="text-xl text-center uppercase font-medium text-white dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-black text-sm rounded-lg focus:ring-blue-500 focus:-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:-black text-white 0 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="bg-black text-white text-sm rounded-lg focus:ring-blue-500 focus:-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:-black dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>
                    <div className="flex justify-around gap-5">
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <button type="button" onClick={() => { setTrainer(!trainer); setAdmin(false); }} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login as Trainer</button>
                        <button type="button" onClick={() => { setAdmin(!admin); setTrainer(false); }} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login as Admin</button>
                    </div>
                    <div className="text-sm text-center font-medium text-white dark:text-gray-300">
                        Not registered? <a href="/signUp" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
                <div className="flex gap-4 justify-center mt-4">
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
