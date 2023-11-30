import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://fitness-server-iota.vercel.app'
})
const UseAxiosPublic = () => {
    return  axiosPublic;
        
};

export default UseAxiosPublic;