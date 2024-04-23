import { useState } from "react";
import { Link } from "react-router-dom";

export default HeaderComponent = () => {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <div className='header'>
            <div className='logo'>
                <Link className="url" to="/">🍔</Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <Link className="url" to="/offer">Offer</Link>
                    <Link className="url" to="/help">Help</Link>
                    <Link className="url" to="/cart">Cart</Link>
                </ul>
                <button onClick={() => setAuthenticated(!authenticated)}>{authenticated ? "Logout" : "Login"}</button>
            </div>
        </div >
    );
}