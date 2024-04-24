import { useState } from "react";
import { Link } from "react-router-dom";

export default HeaderComponent = () => {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <div className='flex justify-between items-center px-20 py-5 shadow-lg'>
            <div className='logo'>
                <Link className="text-5xl" to="/">🍔</Link>
            </div>
            <div className='flex gap-5 items-center'>
                <ul className="flex gap-5 ">
                    <Link className="hover:font-bold duration-300" to="/about">About</Link>
                    <Link className="hover:font-bold duration-300" to="/offer">Offer</Link>
                    <Link className="hover:font-bold duration-300" to="/help">Help</Link>
                    <Link className="hover:font-bold duration-300" to="/cart">Cart</Link>
                </ul>
                <button
                    className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white duration-300"
                    onClick={() => setAuthenticated(!authenticated)}>{authenticated ? "Logout" : "Login"}</button>
            </div>
        </div >
    );
}