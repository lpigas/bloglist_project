import React from 'react'
import Blogs from '../../blogsBlock/Blogs';
import {
     Link,
  } from "react-router-dom";


export default function About({id1, id}) {
  
  return (
    <div>             
      {id1==='blogs'
        ? <Blogs id={id}/>
        : <Link to="/about/blogs" style={{background:'red'}}>blogs</Link>}
    </div>
  )
}
