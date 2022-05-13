import React from 'react'
import './Button.module.css'

export default function MyButton({style,onClick,value}) {
  return (
    <button style={style} onClick={onClick}>
        {value}
    </button>
  )
}
