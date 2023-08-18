import React from 'react'
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                {/* <span className="headerTitleSm">React & Node</span> */}
                <span className="headerTitleLg">WRITE BLOG</span>
                <span className="headerTitleSm">Don't let tell anyone your story. <br />Pick a pen and write your own.</span>
            </div>
            <img
                className="headerImg"
                src="https://images.hdqwalls.com/wallpapers/soft-gradient-solid-color-4k-yl.jpg"
                alt=""
            />
        </div>
    )
}
