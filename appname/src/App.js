import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import './styles/App.css'
import Nav from "./Components/Navigeit/navigation"
import Home from "./Components/Navigeit/UrlsNav/Home";
import Blogs from "./Components/blogsBlock/Blogs";

export default function App() {

  return (
    <Router>
      <Routes>
    <Route path="/" element={<Home/>} />
     <Route path=":id" element={<Topics />} />
     <Route path=":store/:productId" element={<Topics1 />} />
    </Routes>
    </Router>

  );
}

function Topics() {
    let { id } = useParams();
    
    return (
      <div>
        <Nav id={id}/>
      </div>
    );
  
}
function Topics1() {
    let params = useParams();
    console.log(params)
    return (
      <div>
        <Blogs id={params.store} id1={params.productId}/>
      </div>
    );
  
}
