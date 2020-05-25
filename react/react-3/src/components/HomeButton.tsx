import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return <Link to="/" className="home-button">
        <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path d="M 12 2.5 L 2.5 12 H 4 V 22 H 10 V 16 H 14 V 22 H 20 V 12 H 21.5 Z" stroke="black" strokeWidth="1.5" />
        </svg>
    </Link>
};
