import React, { useState } from 'react'
import './sidebar.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await fetch("/categories")
            let parsedData = await res.json()
            setCats(parsedData)
        }
        getCat()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>
                    CATOGERIES
                </span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
))}

                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
            </div>
            <div className="sidebarSocial">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>

        </div>
    )
}
