export default HeaderComponent = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <span>🍔</span>
                <h1>0xFoodApp</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}