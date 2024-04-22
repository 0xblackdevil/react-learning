import React from "react";
import ReactDOM from "react-dom/client";
import "./master.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

const LogoComponent = () => {
    return <div className="logo">
        <h1>Hello React</h1>
    </div>
}

const SearchbarComponent = () => <input type="text" className="searchbar" placeholder="Search..." />

const UserAvatar = () => <div className="user-avatar">
    {/* <img src="https://images.unsplash.com/photo-1712857329031-eecb5980eec7?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
</div>

const Navbar = () => <div className="navbar">
    <LogoComponent />
    <SearchbarComponent />
    <UserAvatar />
</div>

const NavbarLayout = () => {
    return <div className="layout">
        <Navbar />
    </div>
}

root.render(<NavbarLayout />);