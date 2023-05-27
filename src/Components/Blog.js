import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Blog = () => {
    const location = useLocation();
    const {title} = useParams();
    console.log(title)

    return (
        <div className="blog">
            <h1>{title}</h1>
            <p>{location.state.body}</p>
        </div>
    )
}

export default Blog;