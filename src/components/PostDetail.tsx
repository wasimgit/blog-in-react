import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../blogs.tsx";

export default function PostDetail() {

    const { slug } = useParams()

    const getBlogById = (slug) => {
        return blogs.find(blog => blog.id === Number(slug))
    }

    const blog = getBlogById(slug)

    return (
        <>
            <h2>{blog?.title}</h2>
            <p>{blog?.body}</p>
        </>
    )
}