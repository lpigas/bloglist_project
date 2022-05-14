import React, { useEffect, useState } from "react";
import Blogs from "../../blogsBlock/Blogs";
import { Link,useLocation,  useSearchParams} from "react-router-dom";




export default function About({ id1, id }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page,setPage] = useState(+searchParams.get('_page') || 1)
  // const currentParams = Object.fromEntries([...searchParams])
  // console.log(currentParams)
  const incPage =() =>{
    setSearchParams({ _page: page+1  });
  }
  const dePage =() =>{
    setSearchParams({ _page: page-1  });
  }
  useEffect(()=>{
    setPage(+searchParams.get('_page') || 1)
  }, [searchParams])
  
  return (
    <div>
      {id1 === "blogs" ? (
        <Blogs id={id} />
      ) : (
        <Link to="/about/blogs" style={{ background: "red" }}>
          blogs
        </Link>
      )}
      <h1>{page}</h1>
      <button onClick={incPage}>nextPage</button>
      <button onClick={dePage}>prevPage</button>
    </div>
  );
}
