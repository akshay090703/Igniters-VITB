import React from "react";
import classes from "./BlogCard.module.css";

const BlogCard = ({ blog }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <a className={classes.link} href={blog.url} target="_blank">
      <div className={classes["my-card"]}>
        <div
          className={classes["my-card-img"]}
          style={{ backgroundImage: `url(${blog.img})` }}
        ></div>
        <div className={classes["my-card-body"]}>
          <div className={classes["my-card-title"]}>{blog.title}</div>
          <div className={classes.upperRow}>
            <div
              className={classes["my-card-subtitle"]}
            >{`${blog.date.getDate()} ${
              monthNames[blog.date.getMonth()]
            } ${blog.date.getFullYear()}`}</div>
            <div className={classes["my-card-author"]}>
              <img src={blog.authorImg} alt={blog.authorName} />
              <div>{blog.authorName}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
