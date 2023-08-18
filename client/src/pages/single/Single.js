import React from 'react'
import './single.css'
import SinglePost from '../../components/singlepost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Single() {
  return (
    <div className='single'>
      
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
