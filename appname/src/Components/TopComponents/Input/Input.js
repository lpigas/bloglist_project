import React from 'react'
import './input.css'

export default function Input({value,clas, placeholder=[''], onChange}) {
    
  return (
    <div>
        <div className={clas}>       
        <input placeholder={placeholder}
        onChange={onChange}
        value={value}/>
        </div>

    </div>
  )
}
