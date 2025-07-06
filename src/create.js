import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const [title , setTitle ] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending]= useState(false);
    const navigate = useNavigate();

    const handelSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author}
        setIsPending(true);
        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: {"content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog added");
            setIsPending(false);
            navigate("/")
        })


    }


    return ( 
        <div className="create">
           <h2>Add new Blog </h2>
           <form onSubmit={handelSubmit}>
                <label> Blog title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}>
                </input>

                <label>Blog body: </label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog autor</label>
                <select 
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="Mario">Mario</option>
                    <option value="Youshi">Youshi</option>

                </select>
                { !isPending &&<button>Add Blog</button>}
                { isPending &&<button disabled>Submiting...</button>}


           </form>
        </div>
     );
}
 
export default Create;