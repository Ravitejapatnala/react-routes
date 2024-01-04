import React from "react";

const Blog=({count})=>{
    return(
        <div>
            <h1>Blog</h1>
            <p>Content inside the Blog</p>
            <p>{count}</p>
        </div>
    )
}

export default Blog;