import React from "react";
import { useParams, useLocation } from "react-router-dom";
import style from './home.module.css';

const Blog = () => {
    const {title} = useParams();
    const location = useLocation();

    return (
        <div className={style.article}>
            <h1>{title}</h1>
            <p>{location.state.body}</p>
        </div>
    )
}
export default Blog;