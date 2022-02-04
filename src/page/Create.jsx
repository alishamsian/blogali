import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('kafa');
    const [ispending, setIspending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIspending(true);
        const blog = { title, body , author};
        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIspending(false);
            //history.go(-1);
            history.push('/');
        }
        )
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
               <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
               >
                   <option value="ali shamsian">ali shamsian</option>
                   <option value="amir sh">amir sh</option>
               </select>
              {!ispending && <button>Insert Blog</button>} 
              {ispending && <button disabled>Inserting Blog...</button>} 
            </form>
        </div>
      );
}
 
export default Create;