import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div className="not-found">
        <h2>It seems like this page doesn't exist.</h2>
        <Link to="/" className="button home-link">Go to home page</Link>
    </div>
)