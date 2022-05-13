import React from 'react'
import {
     Link,
  } from "react-router-dom";
import Blogs from '../blogsBlock/Blogs';
import MyButton from '../TopComponents/Button/MyButton'

export default function Nav({id, id1}) {
    
  return (
    <div>
         <ul className='nav'>
          <div  className='nav__menu'>
              <MyButton className={id==='home'? 'active': ''} value={<Link to="/home" >Home</Link>}/>
          </div>
          <div className='nav__menu'>
          <MyButton className={id==='about'? 'active': ''} value={<Link to="/about">About</Link>}/>
          </div>
          <div className='nav__menu'>
          <MyButton className={id==='topics'? 'active': ''} value={<Link to="/topics">Topics</Link>}/>
          </div>
          <div  className='nav__menu' >
              <MyButton className={id==='contacts'? 'active': ''} value={<Link to="/contacts">Contacts</Link>}/>
          </div>

        </ul>
       {id==='about' && <Blogs id1={id1} id={id}/>}
    </div>
  )
}
