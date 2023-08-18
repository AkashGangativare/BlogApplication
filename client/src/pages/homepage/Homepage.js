import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts'
import "./homepage.css";
import axios from 'axios'
import { useLocation } from 'react-router-dom';
export default function Homepage() {

  const [posts, setPosts]=useState([]);
  const {search} = useLocation()
  useEffect(()=>{
    
    const fetchPosts= async()=>{
        const res = await fetch(`/posts`+search)
        let parsedData = await res.json()
        console.log(parsedData)
        setPosts(parsedData)
    }
    fetchPosts()
  },[search])
  return (
    <>
       
       <Header />
       <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
       </div>
    </>
  )
}
