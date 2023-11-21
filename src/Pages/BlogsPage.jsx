// Blogs.js
import React from "react";
import classes from "./BlogsPage.module.css";
import blogs from "../blog-data";

const Blogs = () => {
  const sortedBlogs = blogs.slice().sort((a, b) => b.date - a.date);

  return (
    <div className={classes["blogs-page"]}>
      <h1>Blogs</h1>
      <div className={classes["blogs-grid"]}>
        {sortedBlogs.map((blog) => (
          <iframe
            key={blog.id}
            src={blog.url}
            frameBorder="0"
            width="100%"
            height="1000"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
