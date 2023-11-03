import React from 'react';
import { useNavigate } from "react-router-dom";
import "./index.scss";

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
                    <button className="button-cart" onClick={() => navigate("/cart")}>
                    Go to Cart
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
