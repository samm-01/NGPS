import React from "react";
import backgroundImg from "../assets/images/background.jpg"

function HeroSection() {
    return (
        <header
            className="hero-bg text-white bg-slate-600 text-center py-64"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.75,
            }}
        >
            <div className="bg-black bg-opacity-50 py-10 px-4 rounded-lg">
                <h1 className="text-4xl font-bold">Welcome to Our Preschool</h1>
                <p className="mt-4 text-lg">A place where learning and fun go hand in hand.</p>
            </div>
        </header>
    );
}

export default HeroSection;
