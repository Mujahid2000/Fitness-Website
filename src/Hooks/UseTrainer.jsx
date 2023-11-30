import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";




const UseTrainer = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: isTrainer, isPending: isTrainerLoading} = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/trainer/${user.email}`);
            console.log(res.data);
            return res.data.trainer;
        }
    })
    return[isTrainer, isTrainerLoading]
};

export default UseTrainer;