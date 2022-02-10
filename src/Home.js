// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  //   const [name, setName] = useState("mario");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => !(blog.id === id));
  //     setBlogs(newBlogs);
  //   };

  //   const [name, setName] = useState("mario");
  //   const [age, setAge] = useState(25);
  //   const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  // let name = "mario";
  //   const handleClick = (e) => {
  //     setName("luigi");
  //     setAge(30);
  //     setArr([2, 3, 4, 4, 4]);

  // console.log("hello ninjas", e);
  // name = "luigi";
  //the value of name is updated but it is not reactive and it does not trigger react to re-render the updated value
  //   };
  //   const handleClickAgain = (name, e) => {
  //     console.log("hello " + name, e.target);
  //   };

  // useEffect(() => {
  //   // console.log("use effect ran.");
  //   // console.log(blogs);
  //   // console.log(name);
  //   //   }, [name]);

  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("could not fetch data for that resource.");
  //         }
  //         return res.json();
  //       })

  //       .then((data) => {
  //         // console.log(data);
  //         setBlogs(data);
  //         setIsPending(false);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         setIsPending(false);
  //         setError(err.message);
  //       });
  //   }, 1000);
  // }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          //   handleDelete={handleDelete}
        ></BlogList>
      )}
      {/* <div>
        <h2>{name}</h2>
        <button onClick={() => setName("luigi")}>Change Name</button>
      </div> */}
      {/* <BlogList
        blogs={blogs.filter((item) => item.author === "mario")}
        title="Mario's Blogs"
      /> */}

      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
        </div>
      ))} */}

      {/* <h2>Home page</h2>
      <p>
        {name} is {age} years old.
      </p>
      <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
      </ul>
      <button onClick={handleClick}>Click me</button> */}
      {/* <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button> */}
    </div>
  );
};
export default Home;
