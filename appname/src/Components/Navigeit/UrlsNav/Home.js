import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../TopComponents/Button/MyButton";

export default function Home() {
  return (
    <div>
      <div>
        <MyButton value={<Link to="/home">Home</Link>}/>
      </div>
    </div>
  );
}
