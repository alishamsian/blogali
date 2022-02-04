
import BlogList from "../components/blog-list/BlogList";
import useFetch from "../components/useFetch/useFetch";
const Home = () => {
   const {data: blogs , isPending , error} = useFetch('http://localhost:8000/blogs');
   
    return (
        <div className="home">
          {error && <div> {error} </div>}
          {isPending && <div> Loading....</div>}
          {blogs && <BlogList blogs={ blogs } title="my blogs" /> }
        </div>
        
     );
}
 
export default Home;