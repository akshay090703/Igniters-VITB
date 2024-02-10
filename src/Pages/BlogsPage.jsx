// Blogs.js
import React from "react";
import classes from "./BlogsPage.module.css";
import blogs from "../blog-data";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const sortedBlogs = blogs.slice().sort((a, b) => b.date - a.date);

  return (
    <div className={classes["blogs-page"]}>
      <h1>Blogs</h1>
      <div className={classes["blogs-grid"]}>
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
