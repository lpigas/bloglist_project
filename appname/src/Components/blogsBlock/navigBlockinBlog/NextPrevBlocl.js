import React from 'react'
import { Link } from "react-router-dom";
import './NextPriv.css'

export default function NextPrevBlocl({iterPage, serIterPage}) {

    const nextPage = () =>{
        serIterPage(iterPage+1)
      }
      const prevPage = () =>{
        serIterPage(iterPage-1)
      }



  return (
    <div className='NextPriv'>
        {iterPage}
        <div>
        <button onClick={prevPage} disabled={iterPage ===1} 
                style={{margin:'5px', border:'1px solid black'}}>
          <Link to={`/about?_page=`}>{`<=Back page`}</Link>
        </button>
        <button onClick={nextPage} style={{margin:'5px', border:'1px solid black'}}>
          <Link to={`/about?_page=`}>{`Next page=>`}</Link>
        </button>
      </div>
      <button onClick={nextPage} style={{margin:'5px', border:'1px solid black'}}>
          <Link to={`/about`}>{`Back About page`}</Link>
        </button>
    </div>
  )
}
