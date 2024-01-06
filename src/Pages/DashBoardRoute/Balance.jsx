import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaMoneyCheckAlt } from "react-icons/fa";


const Balance = () => {
    const [balance , setBalance] = useState([]);
    const [payment, setPayment] = useState([])
    

    useEffect(() =>{
        axios.get('https://fitness-server-iota.vercel.app/trainerBooked')
        .then(res => res.data)
        .then(data =>{
            setBalance(data)
        })
        
    },[])

    useEffect(() =>{
        axios.get('https://fitness-server-iota.vercel.app/payments')
        .then(res => res.data)
        .then(data =>{
            setPayment(data)
            
        })
    },[])

    const calculateTotal = () => {
        const total = balance.reduce((acc, item) => acc + item.price, 0);
        return total;
    };

    const calculatePayment = () => {
        const total = payment.reduce((acc, item) => acc + Number(item.money), 0);
        return total;
    };


    const calculateTotalMoney = () => {
        const totalBalance = calculateTotal();
        const totalPayment = calculatePayment();
        const totalMoney = totalBalance - totalPayment;
        return totalMoney;
    };
    


    return (
        <div>
            <Helmet>
                <title>Dashboard || Balance</title>
            </Helmet>

            <div className="bg-[#555555] p-6 h-screen">
                <h2 className="text-center text-5xl font-medium mt-2">Balance Dashboard</h2>
            <div className="grid lg:mt-24 grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center mx-auto max-w-7xl">
            <div className="flex justify-center items-center hover:scale-105 transition-transform duration-300 gap-4 border-purple-600r bg-sky-500 text-white font-semibold rounded-xl py-28">
                <FaMoneyCheckAlt></FaMoneyCheckAlt>
                <h3>Booking Balance: ${calculateTotal()}</h3>

            </div>
            <div className="flex justify-center items-center hover:scale-105 transition-transform duration-300 gap-4 bg-sky-500 text-white font-semibold border rounded-xl py-28">
                <FaMoneyCheckAlt></FaMoneyCheckAlt>
                <h3>Payment Balance: ${calculatePayment()} </h3>

            </div>
            <div className="flex justify-center items-center hover:scale-105 transition-transform duration-300 gap-4 bg-sky-500 text-white font-semibold border rounded-xl py-28">
                <FaMoneyCheckAlt></FaMoneyCheckAlt>
                <h3>Available Balance: ${calculateTotalMoney()}</h3>

            </div>
            </div>
        </div>

        </div>
        
    );
};

export default Balance;