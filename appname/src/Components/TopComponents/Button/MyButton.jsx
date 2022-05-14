import React from "react";
import "./Button.module.css";

export default function MyButton({ style, onClick, value, className}) {
  return (
    <button style={style} onClick={onClick} className={className}>
      {value}
    </button>
  );
}
