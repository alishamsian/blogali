import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div className="loading"> Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <div className="container">
          <article>
            <h2> {blog.title}</h2>
            <span> Written By : {blog.author}</span>
            <p> {blog.body} </p>
            <button onClick={handleClick}>delete</button>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
