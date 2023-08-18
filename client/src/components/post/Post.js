import React from 'react'
import './post.css'
import { Link } from "react-router-dom";

export default function Post({ posts }) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className='post'>
            {posts.photo && (
                <img className='postImg' src={PF + posts.photo} />

            )}
            <div className="postInfo">
                <div className="postCats">
                    {posts.categories.map((c) => (

                        <span className='postCat'>{c.name}</span>
))}
                </div>
                <Link className='link' to={`/post/${posts._id}`}>
                <span className='postTitle'>{posts.title}</span>

                </Link>
                <hr />
                <span className='postDate'>{new Date(posts.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>{posts.desc}</p>
        </div>
    )
}
