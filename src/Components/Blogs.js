import React, { useState } from "react";
import { BlogData } from './data';
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState(BlogData);

    const truncateString = (str, num) => {
        if(str.length > num) {
            return str.slice(0, 100) + '...';
        }else {
            return str;
        }
    }

    return (
        <div>
            <h1 className="title">Blogs Page</h1>
            <section className="blogs">
                {blogs && blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return (
                        <article key={id}>
                            <h2>{title}</h2>
                            <p>{truncateString(body,100)}</p>
                            <Link to={title} state={{id,title,body}} className="btn">Learn More</Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Blogs;