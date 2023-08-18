import React, { useEffect, useState, useContext } from 'react'
import './singlepost.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
export default function SinglePost() {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await fetch("/posts/" + path)
            let parsedData = await res.json()
            setPost(parsedData)
            setTitle(parsedData.title);
            setDesc(parsedData.desc);
        }
        getPost()
    }, [path])


    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },

            })
                .then((res) => {
                    alert(res.data);
                });
                setUpdateMode(false)
                console.log(post)
        } catch (err) {
            console.log("Errorrrr ", err);
        }
    };

    const handleUpdate = async () => {
        try {
          await axios.put(`/posts/${post._id}`, {
            username: user.username,
            title,
            desc,
          });
          setUpdateMode(false)      
        } catch (err) {}
      };
    


    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo && (

                    <img src={PF + post.photo} className='singlePostImg' />
                )}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className='singlePostTitle'>{title}
                        {post.username === user?.username &&

                            (<div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={() => { setUpdateMode(true) }}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>)
                        }
                    </h1>)}
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author:
                        <Link className='link' to={`/?user=${user.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>

                {updateMode ? (
                    <textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className='singlePostDesc'>{desc}</p>)}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    )
}
