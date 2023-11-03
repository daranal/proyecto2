import React from 'react';
import { useNavigate } from "react-router-dom";
import "./index.css";
import carSvg from './SC.png';

interface Layout {
    children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <main>
            <header className="navbar">
                <button onClick={() => navigate("/")}>LOGO</button>
                <div className="user-info">
                    <span className="user-name"></span>
                    <button onClick={() => navigate("/cart")}>
                        <img src={carSvg} alt="Car Icon" className="car-icon" /> Go to Cart
                    </button>
                </div>
            </header>
            <section className="products-container">
                {children}
            </section>
        </main>
    )
}

export { Layout }
