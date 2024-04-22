import { useState } from "react";

export default HeaderComponent = () => {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <div className='header'>
            <div className='logo'>
                <span>🍔</span>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button onClick={() => setAuthenticated(!authenticated)}>{authenticated ? "Logout" : "Login"}</button>
            </div>
        </div>
    );
}