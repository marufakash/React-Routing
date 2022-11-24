import React, { useState } from "react";
import style from './home.module.css';
import { BlogData } from "./data";
import { Link } from "react-router-dom";

const Blogs =() => {
    const [blogs, setBlogs] = useState(BlogData);

    const truncateString = (str, num) => {
        if(str.length > num){
            return str.slice(0,100) + ' ...';
        }else{
            return str;
        }
    }

    return (
        <div className={style.page}>
            <h1>Blogs Page</h1>
            <section className={style.blog}>
                {blogs && blogs.map((blog) => {
                    const {id, title, body} = blog;
                    return (
                        <article key={id}>
                            <h3>{title}</h3>
                            <p>{truncateString(body,100)}</p>
                            <Link to={title} state={{id, title, body}} className={style.btn}>Learn more</Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Blogs;