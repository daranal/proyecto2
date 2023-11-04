import React from 'react';
import { useNavigate } from "react-router-dom";
import './Styles.scss'
import icon from './SC.png'

interface Layout {
    children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <main>
            <header className="navbar">
            <img src={icon} alt="Icon" width="20" height="20" className='styled-image' onClick={() => navigate("/")}/>
                <div className="user-info">
                    <button className="button-home" onClick={() => navigate("/cart")}>
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
