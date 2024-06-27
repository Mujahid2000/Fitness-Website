import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://gym-server-orpin.vercel.app'
})
const UseAxiosPublic = () => {
    return  axiosPublic;
        
};

export default UseAxiosPublic;