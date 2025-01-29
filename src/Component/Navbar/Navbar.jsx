import { NavLink } from "react-router-dom";


const Navbar = () => {

    
    return (
        <div >
            <div className="flex justify-around py-11 bg-gray-100 ">
            <NavLink className="font-bold text-2xl" to="/">Home</NavLink>
            <NavLink className="font-bold text-2xl" to="/login">Login</NavLink>
            <NavLink className="font-bold text-2xl" to="/registration">Registration</NavLink>
            </div>
        </div>
    );
};

export default Navbar;