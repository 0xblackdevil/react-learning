import { useState } from "react";
import { Link } from "react-router-dom";

export default HeaderComponent = () => {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <div className="flex justify-between items-center px-20 py-3 shadow-lg">
            <div className="text-4xl">
                <Link to="/">🍔</Link>
            </div>
            <div className="flex gap-5 items-center">
                <ul className="flex gap-5 text-lg">
                    <Link className="font-normal hover:font-bold duration-300" to="/about">About</Link>
                    <Link className="font-normal hover:font-bold duration-300" to="/offer">Offer</Link>
                    <Link className="font-normal hover:font-bold duration-300" to="/help">Help</Link>
                    <Link className="font-normal hover:font-bold duration-300" to="/cart">Cart</Link>
                </ul>
                <div className="bg-black text-white py-1 px-5 rounded-full border hover:bg-white hover:border-black hover:text-black duration-300" onClick={() => setAuthenticated(!authenticated)}>{authenticated ? "Logout" : "Login"}</div>
            </div>
        </div >
    );
}