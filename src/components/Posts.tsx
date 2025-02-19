import React from "react";
import { blogs } from "../blogs.tsx";
import { NavLink } from "react-router-dom";

export default function Posts() {

    const myBlogs = 'My Blogs'

    return (
        <>
            <h4>{myBlogs}</h4>
            <ul>
                {
                    blogs.map((item, index) => (
                        <li key={item?.id}>
                            <h4>{item?.title}</h4>
                            <p>{item?.body}</p>
                            <NavLink to={`/blogs/${item?.id}`}>Read More</NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}