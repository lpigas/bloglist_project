
import React, {useState} from 'react'
import MyButton from '../TopComponents/Button/MyButton'
import Select from'../TopComponents/Select/Select'
import {
    Link,
 } from "react-router-dom";
import './Blogs.css'
import Form from './componentsofBlog/Form';
import MyModal from '../TopComponents/modal/MyModal'
import InnerFormBlog from './componentsofBlog/InnerFormBlog';


export default function Blogs({id}) {
    const [modalAddBlog, setModalAddBlog] = useState(false)
    const [howManyBlogsinPage,setHowManyBlogsinPage] = useState('10')
    const [post,setPost] = useState([{id:1, title:"Name", body:'body'},
    {id:2, title:"Name2", body:'body2'},
    {id:3, title:"Name3", body:'body3'},
])
    const [iterPage,serIterPage] = useState(1)
    const idBlog = Math.ceil(Math.random()*100000) + '.Blog'
    const [addNewBlog, setAddNewBlog]= useState({id:idBlog,title:'',body:'' })
const remove = removepost =>{
    setPost(post.filter(item => item !== removepost))
}
const funcAddBlog = (addNewBlog) =>{
    console.log(addNewBlog)
    setPost([addNewBlog,...post])
    setModalAddBlog(false)
    setAddNewBlog({id:idBlog,title:'',body:'' })
}


  return (
    <div > 
        <div className='Blogs'>
        <div className='BlogsMenu'> 
            <MyButton style={{borderRadius: '15px', 
                border:'2px solid black',
                margin: `5px`}}
                onClick={()=> setModalAddBlog(true)}
                value='Add new blog'/> 
            <MyButton style={{borderRadius: '15px', 
                border:'2px solid black',
                margin: `5px`}}
                value='Reset All blogs'/>
        </div>

        <div className='BlogsMenu__select'>
        <Select options={[{value:10, name:'at 10 pcs'}, 
                      {value:20, name:'at 20 pcs'}]}
            onChange={e => setHowManyBlogsinPage(e)}
            value={howManyBlogsinPage}
            styleforDef={{display:'none'}}
            style={{borderRadius: '15px', border:'2px solid black', margin: `5px`}}/>
            <MyModal visible={modalAddBlog} 
                    setVisible={setModalAddBlog}
                >
                <InnerFormBlog 
                classForInner='InnerFormBlog'
                placeholder={['Enter title Blog', 'Enter Blog']}
                setAddNewBlog={setAddNewBlog}
                addNewBlog={addNewBlog}
                onClick={()=>funcAddBlog(addNewBlog)}
                />
            </MyModal>
        </div>  
            {post.length > 0 
            ?post.map(item => <Form post={item} 
            key={ Math.random()}
            remove={remove}/>)
            : <h1 className='noBlogsYet'>No blogs yet</h1>}
            
        </div> 
        
        <div> 
        <button><Link to={`/about/page=${-iterPage}`}>{`<=Back Home page`}</Link></button>
        <button><Link to={`/about/page=${+iterPage}`}>{`Back Home page=>`}</Link></button>

        </div>
        
        
        
      </div>
  )
}
