import React from 'react'
import {
  Link,
} from "react-router-dom";
import MyButton from '../../TopComponents/Button/MyButton';

export default function Home() {
  return (
    <div>
      <div>
    <MyButton >
        <Link to="/home" >Home</Link>
        </MyButton>
</div>
</div>
  )
}
