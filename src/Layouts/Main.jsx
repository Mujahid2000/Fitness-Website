import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar";
import MyFooter from "../Pages/Home/MyFooter";



const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <MyFooter></MyFooter>}
        </div>
    );
};

export default Main;